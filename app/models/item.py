from .db import db


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False, unique=True)
    aisle = db.Column(db.String(), nullable=False)
    storage = db.Column(db.String(), nullable=False)

    recipes = db.relationship(
        "Recipe",
        secondary=recipe_items
        back_populates="items"
    )
    shopping_list = db.relationship("ShoppingList",
                                    back_populates="shopping_list_items")
    user_items = db.relationship("UserItem", back_populates="item")
