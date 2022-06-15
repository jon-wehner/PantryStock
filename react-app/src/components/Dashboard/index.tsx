import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loadCategories } from '../../store/category';
import { loadUserShoppingLists } from '../../store/shoppingList';
import ShoppingListForm from './forms/ShoppingListForm';
import ShoppingListDisplay from './ShoppingListDisplay';
import './Dashboard.css';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.session.username);
  const userId = useAppSelector((state) => state.session.id);
  useEffect(() => {
    if (userName && userId) {
      dispatch(loadCategories());
      dispatch(loadUserShoppingLists(userId));
    }
  }, [userName, dispatch]);

  return (
    <div className="dashboard__wrapper">
      <h1 className="dashboard__title">
        Hello,
        { ' ' }
        {userName}
        !
      </h1>
      <ShoppingListForm />
      <ShoppingListDisplay />
    </div>
  );
}
