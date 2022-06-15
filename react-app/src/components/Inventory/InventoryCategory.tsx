import React from 'react';
import InventoryItem from './InventoryItem';
import { InventoryItemInterface } from '../../interfaces';

interface InventoryCategoryProps {
  category: {
    name: string
  },
  items: InventoryItemInterface[]
}
export default function InventoryCategory({ category, items }: InventoryCategoryProps) {
  if (!items.length) return null;
  return (
    <table className="table-styled">
      <caption>
        {category.name}
      </caption>
      <thead>
        <tr>
          <th>Qty</th>
          <th>Item</th>
          <th>Expires</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el) => <InventoryItem key={el.id} row={el} />)}
      </tbody>
    </table>
  );
}
