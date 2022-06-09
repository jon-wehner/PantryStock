import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/session';
import './AuthForm.css';
import FormErrors from '../FormErrors';

function LoginForm({ authenticated }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      navigate('/');
    } else {
      setErrors(user.errors);
    }
  };
  const startSignup = () => {
    navigate(
      '/sign-up',
      {
        state: {
          tempEmail: email,
        },
      },
    );
  };
  const signInDemo = async (e) => {
    e.preventDefault(e);
    await dispatch(login('demo@aa.io', 'password'));
    navigate('/');
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    navigate('/');
  }

  return (
    <div className="auth__wrapper">
      <form className="loginForm" onSubmit={onLogin}>
        <FormErrors errors={errors} />
        <div className="signup__link">
          <span>
            Don&apos;t have an account?
            {' '}
            <button type="button" id="signuplink" onClick={() => startSignup()}>Sign up.</button>
          </span>
        </div>
        <div className="formfield">
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              placeholder="example@email.com"
              value={email}
              onChange={updateEmail}
            />
          </label>
        </div>
        <div className="formfield">
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              placeholder="*********"
              value={password}
              onChange={updatePassword}
            />
          </label>
        </div>
        <div className="login__buttonContainer">
          <button type="submit">Login</button>
          <button id="demoLogin" type="button" onClick={signInDemo}>Demo User</button>
        </div>
      </form>
      <div className="auth__image" />
    </div>
  );
}

LoginForm.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default LoginForm;