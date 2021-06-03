import React from 'react';
import PropTypes from 'prop-types';
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingListCategory({ category, items }) {
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

ShoppingListCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fridge: PropTypes.bool.isRequired,
    categoryId: PropTypes.number.isRequired,
  })).isRequired,
};
