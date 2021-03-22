import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ShoppingListItem from '../ShoppingList/forms/ShoppingListItem';

export default function SearchResult ({item, pantry}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li onClick={() => setShowModal(true)}>{item.name}</li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          {pantry ?
          <ShoppingListItem item={item} setShowModal={setShowModal}/> : null
          }
        </Modal>
      }
    </>

  )
}
