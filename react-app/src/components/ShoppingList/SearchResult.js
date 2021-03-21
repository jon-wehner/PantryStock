import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ShoppingListItem from './forms/ShoppingListItem';

export default function SearchResult ({item}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li onClick={() => setShowModal(true)}>{item.name}</li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <ShoppingListItem item={item}/>
        </Modal>
      }
    </>

  )
}
