from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, EqualTo, ValidationError, Email
from app.models import User


def email_exists(form, field):
    print('Checking if user exits', field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('A user with that email exists')


def username_exists(form, field):
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already taken')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[
                           DataRequired('Username is blank'), username_exists])
    email = StringField('email', validators=[
                        DataRequired('Email is blank'),
                        email_exists,
                        Email('Not a valid Email')
                        ])
    password = StringField('password', validators=[
                           DataRequired('Password is blank')
                           ])
    repeat_password = StringField('repeat_password', validators=[
        DataRequired('Repeat Password is blank'),
        EqualTo('password', message='Passwords must match')
    ])
