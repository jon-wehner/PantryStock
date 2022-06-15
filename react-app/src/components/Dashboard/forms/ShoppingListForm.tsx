import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { createShoppingList } from '../../../store/shoppingList';
import FormErrors from '../../FormErrors';
import './ShoppingListForm.css';

export default function ShoppingListForm() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.session.id);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState(['']);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId) {
      const shoppingList = await dispatch(createShoppingList(name, userId));
      if (shoppingList.errors) {
        setErrors(shoppingList.errors);
      }
    } else {
      setErrors(['Something Went Wrong Please Refresh']);
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
