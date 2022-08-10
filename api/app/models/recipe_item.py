from .db import db


class RecipeItem(db.Model):
    __tablename__ = "recipe_items"
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"))
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    quantity = db.Column(db.Float, nullable=False)
    measurement_id = db.Column("measurement_id", db.Integer,
                               db.ForeignKey("measurements.id"),
                               nullable=False)
    recipe = db.relationship("Recipe",
                             back_populates="recipe_items")
    item = db.relationship("Item", back_populates="recipe_items")
    measurement = db.relationship("Measurement",
                                  back_populates="recipe_items")
