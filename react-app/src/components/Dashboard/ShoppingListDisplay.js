import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayRow from './DisplayRow';

export default function ShoppingListDisplay() {
  const shoppingLists = useSelector((state) => state.shoppingLists);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shoppingLists) {
      setLoaded(true);
    }
  }, [shoppingLists]);

  if (!loaded) return null;
  return (
    <div className="dashboard__shoppingListContainer">
      <h1>Your Shopping Lists</h1>
      {Object.values(shoppingLists).map((shoppingList) => (
        <DisplayRow key={shoppingList.id} shoppingList={shoppingList} />))}
    </div>

  );
}
