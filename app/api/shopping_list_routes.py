from flask import Blueprint, request
from app.models import ShoppingList, db
from app.forms import CreateShoppingListForm
from app.utils import validation_errors_to_error_messages
from flask_login import login_required

shopping_list_routes = Blueprint('shopping-lists', __name__)


# Route for users to create new shopping lists
@shopping_list_routes.route('/', methods=['POST'])
@login_required
def create_shopping_list():
    form = CreateShoppingListForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        shopping_list = ShoppingList(
            name=form.data['name'],
            user_id=form.data['user_id']
        )
        db.session.add(shopping_list)
        db.session.commit()
        return shopping_list.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
