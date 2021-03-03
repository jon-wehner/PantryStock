from .db import db


class Measurement(db.Model):
    __tablename__ = "measurements"

    id = db.Column(db.Integer, primary_key=True)
    unit = db.Column(db.String(255), nullable=False, unique=True)

    recipe_items = db.relationship("RecipeItem", back_populates="Measurement")
    user_items = db.relationship("UserItem", back_populates="Measurement")
    shopping_list_items = db.relationship("ShoppingListItem",
                                          back_populates="Measurement")
