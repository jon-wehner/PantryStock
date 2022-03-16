import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../store/session';
import './LogoutButton.css';

function LogoutButton({ setAuthenticated }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    setAuthenticated(false);
    await dispatch(logout());
    navigate('/');
  };

  return <button type="button" className="logoutbutton" onClick={onLogout}>Logout</button>;
}

LogoutButton.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};

export default LogoutButton;
