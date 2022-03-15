import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createShoppingList } from '../../../store/shoppingList';
import './ShoppingListForm.css';

export default function ShoppingListForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [name, setName] = useState('Shopping List Name');
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shoppingList = await dispatch(createShoppingList(name, user.id));
    setErrors(shoppingList.errors);
  };

  return (
    <form className="shoppingList__form" onSubmit={handleSubmit}>
      {errors
        && (
        <ul className="errors">
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        )}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" className="stdbutton">Create Shopping List</button>
    </form>
  );
}
