from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def email_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    userl = User.query.filter(User.email == email).first()
    if userl:
        raise ValidationError("A user with that email exists")


def username_exists(form, field):
    username = field.data
    user


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), email_exists])
    password = StringField('password', validators=[DataRequired()])
