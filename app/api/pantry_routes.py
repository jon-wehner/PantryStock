from flask import Blueprint, request
from app.models import UserItem, User
from app.forms import PantryItemForm
from flask_login import login_required
from app.utils import validation_errors_to_error_messages

pantry_routes = Blueprint('pantry', __name__)


# Get all of a user's Items
@pantry_routes.route('/<int:user_id>')
@login_required
def user_pantry(user_id):
    return None


# Add an item to a user pantry
@pantry_routes.route('/<int:user_id>', methods=['POST'])
@login_required
def add_item(user_id):
    user = User.query.get(user_id)
    form = PantryItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        item = UserItem(
            item_id=form.data['item_id'],
            user_id=form.data['user_id'],
            expiration_date=form.data['expiration_date'],
            quantity=form.data['quantity'],
            measurment_id=form.data['measurement_id']
        )
        db.session.add(item)
    if form.errors:
        return {"errors": validation_errors_to_error_messages()}
    else:
        db.session.commit()
        return {"inventory": user.inventory()}
