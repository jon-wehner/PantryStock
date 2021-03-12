import React, { useState } from "react";
import { Redirect, useLocation } from 'react-router-dom';
import { signUp } from '../../services/auth';
import './SignUpForm.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const location = useLocation()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="signup__fieldset">
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        ></input>
      </div>
      <div className="signup__fieldset">
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="username"
          onChange={e => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div className="signup__fieldset">
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>
      <div className="signup__fieldset">
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          autoComplete="new-password"
          onChange={e => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
