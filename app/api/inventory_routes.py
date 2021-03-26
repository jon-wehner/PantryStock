from flask import Blueprint, request
from app.models import UserItem, User, db
from app.forms import InventoryItemForm
from flask_login import login_required
from app.utils import validation_errors_to_error_messages

inventory_routes = Blueprint('inventory', __name__)


# Get all of a user's Items
@inventory_routes.route('/<int:user_id>')
@login_required
def user_inventory(user_id):
    user = User.query.get(user_id)
    if user:
        return {"inventory": user.inventory()}
    else:
        return {"errors": "User Not Found"}


# Add an item to a user intentory
@inventory_routes.route('/<int:user_id>', methods=['POST'])
@login_required
def add_item(user_id):
    user = User.query.get(user_id)
    form = InventoryItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        item = UserItem(
            item_id=form.data['item_id'],
            user_id=user_id,
            expiration_date=form.data['expiration_date'],
            quantity=form.data['quantity'],
            measurement_id=form.data['measurement_id']
        )
        db.session.add(item)
    if form.errors:
        return {"errors": validation_errors_to_error_messages(form.errors)}
    else:
        db.session.commit()
        return {"inventory": user.inventory()}


@inventory_routes.route('/<int:user_id>/<int:item_id>',
                        methods=['PUT', 'DELETE'])
@login_required
def edit_delete_item(user_id, item_id):
    user = User.query.get(user_id)
    item = UserItem.query.get(item_id)
    form = InventoryItemForm()
    if request.method == 'PUT':
        form['csrf_token'].data = request.cookies['csrf_token']
        form['item_id'].data = item.item.id
        if form.validate_on_submit():
            item.expiration_date = form.data['expiration_date']
            item.quantity = form.data['quantity']
            measurement_id = form.data['measurement_id']
            db.session.add(item)
    if request.method == 'DELETE':
        db.session.delete(item)
    if form.errors:
        return {"errors": validation_errors_to_error_messages(form.errors)}
    else:
        db.session.commit()
        return {"inventory": user.inventory()}
