import React from "react";
import { logout } from "../../store/session"
import { useDispatch } from 'react-redux'
import './LogoutButton.css'

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    setAuthenticated(false);
    await dispatch(logout());
  };

  return <button className="logoutbutton" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
