import React from 'react';
import { Category, ShoppingListItemInterface } from '../../interfaces';
import ShoppingListItem from './ShoppingListItem';

interface ShoppingListCategoryProps {
  category: Category,
  items: ShoppingListItemInterface[]
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
