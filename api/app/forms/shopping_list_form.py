from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ShoppingListForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(
        'Please enter a shopping list name')])
    user_id = StringField('user_id', validators=[DataRequired()])
