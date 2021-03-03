from .db import db


class ShoppingListItems(db.Model):
    __tablename__ = "shopping_list_items"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    item_id = db.Column("item_id", db.Integer, db.ForeignKey("items.id"))
    quantity = db.Column(db.Float, nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey("measurements.id"),
                               nullable=False)

    shopping_list = db.relationship("ShoppingList",
                                    back_populates="shopping_list_items")
    item = db.relationship("Item", back_populates="shopping_list_items")
