import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddShoppingListItem from '../ShoppingList/forms/AddShoppingListItem';
import NewInventoryItem from '../Inventory/forms/NewInventoryItem';
import { Item } from '../../interfaces';

interface SearchResultProps {
  item: Item,
  inventory: boolean,
  hideMenu: Function
}
export default function SearchResult({ item, inventory, hideMenu }: SearchResultProps) {
  const [showModal, setShowModal] = useState(false);
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowModal(true);
    }
  };

  return (
    <>
      <li data-testid="searchResult">
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
