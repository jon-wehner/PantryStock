import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { signUp } from '../../store/session';
import './AuthForm.css';
import FormErrors from '../FormErrors';

interface SignUpFormProps {
  authenticated: boolean,
  setAuthenticated: Function,
}

interface LocationState {
  tempEmail: string
}

function SignUpForm({ authenticated, setAuthenticated }: SignUpFormProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState(state.tempEmail);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await dispatch(signUp(username, email, password, repeatPassword));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  if (authenticated) {
    navigate('/');
  }

  return (
    <div className="auth__wrapper">
      <form className="loginForm" onSubmit={onSignUp}>
        <FormErrors errors={errors} />
        <div className="formfield">
          <label htmlFor="SignupUserName">
            Username
            <input
              id="SignupUserName"
              type="text"
              name="username"
              placeholder="user"
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
              placeholder="example@email.com"
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
              placeholder="*******"
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
              placeholder="*******"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
            />
          </label>
        </div>
        <div className="login__buttonContainer">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="auth__image" />
    </div>
  );
}

export default SignUpForm;
