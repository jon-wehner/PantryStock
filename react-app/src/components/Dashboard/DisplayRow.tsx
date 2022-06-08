import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DisplayRow({ shoppingList }) {
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

DisplayRow.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      inCart: PropTypes.bool.isRequired,
      item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        fridge: PropTypes.bool.isRequired,
        categoryId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
      }).isRequired,
      measurement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
      shoppingListId: PropTypes.number.isRequired,
    })),
  }).isRequired,
};
