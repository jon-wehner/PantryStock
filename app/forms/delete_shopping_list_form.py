from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField
from wtforms import DataRequired


class DeleteShoppingListForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired()])
