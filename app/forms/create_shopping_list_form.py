from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CreateShoppingListForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    user_id = StringField('user_id', validators=[DataRequired()])
