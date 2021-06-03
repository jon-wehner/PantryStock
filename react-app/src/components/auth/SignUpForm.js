import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signUp } from '../../store/session';
import './AuthForm.css';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(location.state.tempEmail);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signUp(username, email, password));
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="loginForm" onSubmit={onSignUp}>
      <div className="formfield">
        <label htmlFor="SignupUserName">
          User Name
          <input
            id="SignupUserName"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
      </div>
      <div className="formfield">
        <label htmlFor="SignupEmail">
          Email
          <input
            id="SignupEmail"
            type="text"
            name="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
      </div>
      <div className="formfield">
        <label htmlFor="SignupPassword">
          Password
          <input
            id="SignupPassword"
            type="password"
            name="password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
      </div>
      <div className="formfield">
        <label htmlFor="SignupRepeatPassword">
          Repeat Password
          <input
            type="password"
            name="repeat_password"
            autoComplete="new-password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            required
          />
        </label>
      </div>
      <div className="login__buttonContainer">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

SignUpForm.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default SignUpForm;
