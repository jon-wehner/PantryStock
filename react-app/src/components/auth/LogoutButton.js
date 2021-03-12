import React from "react";
import { logout } from "../../store/session"
import { useDispatch } from 'react-redux'
import './LogoutButton.css'

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
  };

  return <button className="logoutbutton" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
