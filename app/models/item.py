from .db import db


class Item(db.model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False, unique=True)
    aisle = db.Column(db.String(), nullable=False)
    storage = db.Column(db.String(), nullable=False)
