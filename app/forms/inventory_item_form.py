from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, FloatField
from wtforms.validators import DataRequired


class InventoryItemForm(FlaskForm):
    item_id = IntegerField('item_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    expiration_date = DateField('expiration_date', validators=[DataRequired()])
    quantity = FloatField('quantity', validators=[DataRequired()])
    measurement_id = IntegerField('measurement_id',
                                  validators=[DataRequired()])
