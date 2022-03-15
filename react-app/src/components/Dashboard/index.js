import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/category';
import { loadUserShoppingLists } from '../../store/shoppingList';
import ShoppingListForm from './forms/ShoppingListForm';
import ShoppingListDisplay from './ShoppingListDisplay';
import './Dashboard.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      dispatch(loadCategories());
      dispatch(loadUserShoppingLists(user.id));
    }
  }, [user, dispatch]);

  return (
    <div className="dashboard__wrapper">
      <h1 className="dashboard__title">
        Hello,
        {user && user.username}
        !
      </h1>
      <ShoppingListForm />
      <ShoppingListDisplay />
    </div>
  );
}
