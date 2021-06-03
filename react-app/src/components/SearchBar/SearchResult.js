import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../context/Modal';
import AddShoppingListItem from '../ShoppingList/forms/AddShoppingListItem';
import NewInventoryItem from '../Inventory/forms/NewInventoryItem';

export default function SearchResult({ item, inventory, hideMenu }) {
  const [showModal, setShowModal] = useState(false);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setShowModal(true);
    }
  };

  return (
    <>
      <li>
        <button
          onClick={() => setShowModal(true)}
          onKeyPress={handleEnter}
          type="button"
        >
          {item.name}
        </button>
      </li>
      {showModal
        && (
        <Modal onClose={() => {
          setShowModal(false);
        }}
        >
          {inventory ? (
            <NewInventoryItem
              item={item}
              setShowModal={setShowModal}
              hideMenu={hideMenu}
            />
          )
            : (
              <AddShoppingListItem
                item={item}
                setShowModal={setShowModal}
                hideMenu={hideMenu}
              />
            ) }
        </Modal>
        )}
    </>
  );
}

SearchResult.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fridge: PropTypes.bool.isRequired,
    categoryId: PropTypes.number.isRequired,
  }).isRequired,
  inventory: PropTypes.bool.isRequired,
  hideMenu: PropTypes.func.isRequired,
};
