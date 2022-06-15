import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/session';
import './LogoutButton.css';

interface LogoutButtonProps {
  setAuthenticated: Function
}
function LogoutButton({ setAuthenticated }: LogoutButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    setAuthenticated(false);
    await dispatch(logout());
    navigate('/');
  };

  return <button type="button" className="logoutbutton" onClick={onLogout}>Logout</button>;
}

export default LogoutButton;
