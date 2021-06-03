import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/items';
import { loadUserShoppingLists } from '../../store/shoppingList';
import ShoppingListForm from './forms/ShoppingListForm';
import ShoppingListDisplay from './ShoppingListDisplay';
import './Dashboard.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [showShoppingListForm, setShowShoppingListForm] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(loadCategories());
      dispatch(loadUserShoppingLists(user.id));
    }
  }, [user, dispatch]);

  const revealForm = (e) => {
    e.preventDefault();
    setShowShoppingListForm(true);
  };

  return (
    <div className="dashboard__wrapper">
      <h1 className="dashboard__title">
        Hello,
        {user && user.username}
        !
      </h1>
      {showShoppingListForm ? (
        <ShoppingListForm setShowForm={setShowShoppingListForm} />
      ) : (
        <button type="button" className="stdbutton dashboard__button" onClick={revealForm}>
          New Shopping List
        </button>
      )}
      <ShoppingListDisplay />
    </div>
  );
}
