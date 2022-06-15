import React from 'react';
import { Category, Item, Measurement } from '../../interfaces';
import ShoppingListItem from './ShoppingListItem';

interface ShoppingListCategoryProps {
  category: Category,
  items: [{
    id: number,
    inCart: boolean,
    item: Item
    measurement: Measurement,
    quantity: number,
    shoppingListId: number
  }],
}
export default function ShoppingListCategory({ category, items }: ShoppingListCategoryProps) {
  if (!items.length) return null;
  return (
    <table className="table-styled">
      <caption>
        {category.name}
      </caption>
      <thead>
        <tr>
          <th>
            Qty
          </th>
          <th>Item</th>
          <th>Add to Cart</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el) => <ShoppingListItem key={el.id} row={el} />)}
      </tbody>
    </table>
  );
}
