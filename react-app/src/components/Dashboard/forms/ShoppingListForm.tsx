import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createShoppingList } from '../../../store/shoppingList';
import FormErrors from '../../FormErrors';
import './ShoppingListForm.css';

export default function ShoppingListForm() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.id);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shoppingList = await dispatch(createShoppingList(name, userId));
    if (shoppingList.errors) {
      setErrors(shoppingList.errors);
    }
  };

  return (
    <form className="shoppingList__form" onSubmit={handleSubmit}>
      <FormErrors errors={errors} />
      <div>
        <input placeholder="Enter shopping list name" onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="stdbutton">Create Shopping List</button>
      </div>
    </form>
  );
}
