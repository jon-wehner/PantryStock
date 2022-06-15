import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingList } from '../../interfaces';

interface DisplayRowProps {
  shoppingList: ShoppingList
}
export default function DisplayRow({ shoppingList }: DisplayRowProps) {
  const navigate = useNavigate();
  const goToList = () => {
    navigate(`../shopping-lists/${shoppingList.id}`);
  };

  return (
    <button className="shoppingList" type="button" onClick={goToList}>
      {shoppingList.name}
      <div>
        {shoppingList && shoppingList.items.length}
        {' '}
        items
      </div>
    </button>
  );
}
