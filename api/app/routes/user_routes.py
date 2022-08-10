from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, ShoppingList

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# Gets all of the user's shopping lists
@user_routes.route('/<int:id>/shopping-lists/')
@login_required
def load_shopping_lists(id):
    user = User.query.get(id)
    if user:
        shopping_lists = ShoppingList.query.filter_by(user_id=id)
        return {shopping_list.id: shopping_list.to_dict() for
                shopping_list in shopping_lists}
    return {"error": "User Not Found"}
