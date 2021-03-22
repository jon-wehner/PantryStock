from .db import db


class ShoppingList(db.Model):
    __tablename__ = "shopping_lists"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="shopping_lists")
    shopping_list_items = db.relationship("ShoppingListItem",
                                          back_populates="shopping_list",
                                          cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "items": [item.to_dict() for item in self.shopping_list_items]
        }
