import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/session';
import './AuthForm.css';
import FormErrors from '../FormErrors';

interface LoginFormProps {
  authenticated: boolean
}

function LoginForm({ authenticated }: LoginFormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
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
  const signInDemo = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
    navigate('/');
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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
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

export default LoginForm;
