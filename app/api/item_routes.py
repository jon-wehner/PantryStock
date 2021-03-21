from flask import Blueprint, request
from app.models import Item, Category
from flask_login import login_required

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
@login_required
def items():
    items = Item.query.all()
    return {item.id: item.to_dict() for item in items}


@item_routes.route('/', methods=['PUT'])
@login_required
def search_items():
    query = request.get_json()
    items = Item.query.filter(Item.name.ilike(f'%{query}%'))
    return {item.id: item.to_dict() for item in items}


@item_routes.route('/categories/')
@login_required
def categories():
    categories = Category.query.all()
    return {category.id: category.to_dict() for category in categories}
