from flask import Blueprint, request
from app.models import UserItem
from flask_login import login_required

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
    return None
