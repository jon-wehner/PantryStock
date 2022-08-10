from .db import db


class Item(db.Model):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False, unique=True)
    category_id = db.Column(db.Integer(), db.ForeignKey("categories.id"),
                            nullable=False)
    fridge = db.Column(db.Boolean(), nullable=False)

    recipe_items = db.relationship("RecipeItem", back_populates="item")
    category = db.relationship("Category", back_populates="items")
    shopping_list_items = db.relationship("ShoppingListItem",
                                          back_populates="item")
    user_items = db.relationship("UserItem", back_populates="item")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "categoryId": self.category_id,
            "category": self.category.name,
            "fridge": self.fridge,
        }
