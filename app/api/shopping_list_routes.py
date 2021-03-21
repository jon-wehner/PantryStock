from flask import Blueprint, request
from app.models import ShoppingList, Item, ShoppingListItem, db
from app.forms import ShoppingListForm, DeleteShoppingListForm
from app.utils import validation_errors_to_error_messages
from flask_login import login_required

shopping_list_routes = Blueprint('shopping-lists', __name__)


# Route for users to create new shopping lists
@shopping_list_routes.route('/', methods=['POST'])
@login_required
def create_shopping_list():
    form = ShoppingListForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        shopping_list = ShoppingList(
            name=form.data['name'],
            user_id=form.data['user_id']
        )
        db.session.add(shopping_list)
        db.session.commit()
        return {shopping_list.id: shopping_list.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}


# Combined route for editing and deleting one shopping list
@shopping_list_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @login_required
def shopping_list(id):
    shopping_list = ShoppingList.query.get(id)
    if request.method == 'GET':
        return {shopping_list.id: shopping_list.to_dict()}
    elif request.method == 'PUT':
        form = ShoppingListForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            shopping_list.name = form.data['name']
            db.session.add(shopping_list)
            db.session.commit()
            return shopping_list.to_dict()
    elif request.method == 'DELETE':
        form = DeleteShoppingListForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            db.session.delete(shopping_list)
            db.session.commit()
            return 'Shopping List Deleted'
    return {'errors': validation_errors_to_error_messages(form.errors)}


@shopping_list_routes.route('/<int:id>/items', methods=['POST'])
# @login_required
def edit_shopping_list_items(id):
    data = request.get_json()
    print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data)
    shopping_list = ShoppingList.query.get(id)
    shopping_list_item = ShoppingListItem(
        user_id=shopping_list.user_id,
        item_id=data['item_id'],
        shopping_list_id=id,
        measurement_id=data['measurement_id'],
        quantity=data['quantity']
    )
    db.session.add(shopping_list_item)
    db.session.commit()
    return shopping_list.to_dict()
