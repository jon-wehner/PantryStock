from flask import Blueprint, jsonify
from app.models import Item
from flask_login import login_required

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
@login_required
def items():
    items = Item.query.all()
    return {item.id: item.to_dict() for item in items}
