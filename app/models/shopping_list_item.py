from .db import db


class ShoppingListItem(db.Model):
    __tablename__ = "shopping_list_items"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    in_cart = db.Column(db.Boolean, default=False)
    shopping_list_id = db.Column(db.Integer,
                                 db.ForeignKey("shopping_lists.id"))
    quantity = db.Column(db.Float, nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey("measurements.id"),
                               nullable=False)
    measurement = db.relationship("Measurement",
                                  back_populates="shopping_list_items")
    shopping_list = db.relationship("ShoppingList",
                                    back_populates="shopping_list_items")
    item = db.relationship("Item", back_populates="shopping_list_items")

    def to_dict(self):
        return {
            "id": self.id,
            "item": self.item.to_dict(),
            "shopping_list_id": self.shopping_list_id,
            "quantity": self.quantity,
            "measurement": self.measurement.to_dict()
        }
