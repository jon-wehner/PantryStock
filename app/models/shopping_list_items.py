from .db import db


shopping_list_items = db.Table(
    "user_items",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
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
