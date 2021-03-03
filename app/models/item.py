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
    shopping_lists = db.relationship(
        "Shopping_List",
        secondary=shopping_list_items
        back_populates="items"
    )
    users = db.relationship(
        "User",
        secondary=user_items
        back_populates="items"
    )
