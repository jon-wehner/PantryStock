import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteShoppingList } from '../../../store/shoppingList';
import './ConfirmDelete.css';

export default function ConfirmDelete({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/', { replace: true });
    await dispatch(deleteShoppingList(id));
  };
  return (
    <form className="deleteForm" onSubmit={handleSubmit}>
      <p>Are you sure you want to delete this list?</p>
      <button type="submit" className="stdbutton" style={{ backgroundColor: 'red' }}>Delete</button>
    </form>
  );
}

ConfirmDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
