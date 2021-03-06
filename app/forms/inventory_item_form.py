from flask_wtf import FlaskForm
from wtforms import IntegerField, DateTimeField, FloatField
from wtforms.validators import DataRequired


class InventoryItemForm(FlaskForm):
    item_id = IntegerField('item_id', validators=[DataRequired()])
    expiration_date = DateTimeField(
        'expiration_date', format="%Y-%m-%dT%H:%M:%S.000z")
    quantity = FloatField('quantity', validators=[DataRequired()])
    measurement_id = IntegerField('measurement_id',
                                  validators=[DataRequired()])
