from flask import Blueprint, jsonify
from app.models import Item

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
@login_required
def items():
    items = User.query.all()
