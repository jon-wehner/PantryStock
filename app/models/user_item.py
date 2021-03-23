from .db import db


class UserItem(db.Model):
    __tablename__ = "user_items"
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    expiration_date = db.Column(db.DateTime, nullable=True)
    date_created = db.Column(db.DateTime, default=db.func.current_timestamp())
    quantity = db.Column(db.Float, nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey("measurements.id"),
                               nullable=False)
    user = db.relationship("User", back_populates="user_items")
    item = db.relationship("Item", back_populates="user_items")
    measurement = db.relationship("Measurement",
                                  back_populates="user_items")

    def to_dict(self):
        return {
            "id": self.id,
            "expirationDate": self.expiration_date,
            "quantity": self.quantity,
            "item": self.item.to_dict(),
            "measurement": self.measurement.to_dict(),
        }
