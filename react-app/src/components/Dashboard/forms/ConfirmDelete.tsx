import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { deleteShoppingList } from '../../../store/shoppingList';
import './ConfirmDelete.css';

interface ConfirmDeleteProps {
  id: number
}
export default function ConfirmDelete({ id }: ConfirmDeleteProps) {
  const dispatch = useAppDispatch();
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
