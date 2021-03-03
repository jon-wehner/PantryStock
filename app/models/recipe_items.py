from .db import db


recipe_items = db.Table(
    "recipe_items",
    db.Column(
        "recipe_id",
        db.Integer,
        db.ForeignKey("recipes.id"),
        primary_key=True
    )
    db.Column(
        "item_id",
        db.Integer,
        db.ForeignKey("items.id"),
        primary_key=True
    )
    db.Column(
        "quantity",
        db.Float,
        nullable=False
    )
    db.Column(
        "measurement_id",
        db.Integer,
        db.ForeignKey("measurements.id"),
        nullable=False
    )
)
