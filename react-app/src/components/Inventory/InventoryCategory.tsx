import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from './InventoryItem';

export default function InventoryCategory({ category, items }) {
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

InventoryCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    fridge: PropTypes.bool,
    categoryId: PropTypes.number,
  })),
};
InventoryCategory.defaultProps = {
  items: null,
};
