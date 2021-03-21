from .db import db


class Measurement(db.Model):
    __tablename__ = "measurements"

    id = db.Column(db.Integer, primary_key=True)
    unit = db.Column(db.String(255), nullable=False, unique=True)

    recipe_items = db.relationship("RecipeItem", back_populates="measurement")
    user_items = db.relationship("UserItem", back_populates="measurement")
    shopping_list_items = db.relationship("ShoppingListItem",
                                          back_populates="measurement")

    def to_dict(self):
        return {
            "id": self.id,
            "unit": self.unit
        }
