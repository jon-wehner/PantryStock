from .db import db

user_items = db.Table(
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
        "expiration_date",
        db.DateTime,
        nullable=False
    )
    db.Column(
        "date_created",
        db.DateTime,
        default=datetime.utcnow
    )
    db.Column(
        "measurement_id",
        db.Integer,
        db.ForeignKey("measurements.id"),
        nullable=False
    )
)
