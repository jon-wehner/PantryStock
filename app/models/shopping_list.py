from .db import db


class Shopping_List(db.Model):
    __tablename__ = "shopping_lists"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, nullable=False, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="shopping_lists")

    items = db.relationship(
        "Item",
        secondary=shopping_list_items,
        back_populates="shopping_lists"
    )
