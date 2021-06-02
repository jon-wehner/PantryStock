import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/session';
import './LogoutButton.css';

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = async () => {
    setAuthenticated(false);
    await dispatch(logout());
  };

  return <button type="button" className="logoutbutton" onClick={onLogout}>Logout</button>;
};

LogoutButton.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};

export default LogoutButton;
