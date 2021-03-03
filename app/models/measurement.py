from .db import db


class Measurement(db.Model):
    __tablename__ = "measurements"

    id = db.Column(db.Integer, primary_key=True)
    unit = db.Column(db.String(255), nullable=False, unique=True)
