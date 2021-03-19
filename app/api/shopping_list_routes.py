from flask import Blueprint
from app.models import ShoppingList
from app.form import CreateShoppingListForm
from flask_login import login_required

shopping_list_routes = Blueprint('shopping-lists', __name__)


@shopping_list_routes.route('/')
@login_required
def create_shopping_list():
    form = CreateShoppingListForm()

