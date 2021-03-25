import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from 'react-redux'
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    }
    else {
      setErrors(user.errors);
    }
  };
  const signInDemo = async (e) => {
    e.preventDefault(e)
    await dispatch(login('demo@aa.io', 'password'))
    setAuthenticated(true)
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="loginForm" onSubmit={onLogin}>
      <div className="errors__container">
        {errors.map((error) => (
          <div className="error">{error}</div>
        ))}
      </div>
      <div className="signup__link">
        <span>
        Don't have an account? <Link to="/sign-up">Sign up.</Link>
        </span>
      </div>
      <div className="formfield">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="formfield">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className="login__buttonContainer">
        <button type="submit">Login</button>
        <button id="demoLogin" type="none" onClick={signInDemo}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
