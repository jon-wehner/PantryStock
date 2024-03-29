import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { ShoppingListInterface } from '../../interfaces';
import DisplayRow from './DisplayRow';

export default function ShoppingListInterfaceDisplay() {
  const shoppingLists: ShoppingListInterface[] = useAppSelector((state) => state.shoppingLists);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shoppingLists) {
      setLoaded(true);
    }
  }, [shoppingLists]);

  if (!loaded) return null;
  return (
    <div className="dashboard__shoppingListContainer">
      <h1>My Shopping Lists</h1>
      {Object.values(shoppingLists).map((shoppingList) => (
        <DisplayRow key={shoppingList.id} shoppingList={shoppingList} />))}
    </div>

  );
}
