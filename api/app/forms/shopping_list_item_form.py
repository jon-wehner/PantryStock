from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class ShoppingListItemForm(FlaskForm):
    item_id = IntegerField('item_id', validators=[DataRequired()])
    measurement_id = IntegerField('measurement_id', validators=[
        DataRequired('Please Choose a package size')])
    quantity = IntegerField('quantity', validators=[
        DataRequired('Enter a quantity')])
