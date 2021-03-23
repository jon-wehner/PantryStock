import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ShoppingListItem from '../ShoppingList/forms/ShoppingListItem';
import NewInventoryItem from '../Inventory/forms/NewInventoryItem'

export default function SearchResult ({item, inventory}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li onClick={() => setShowModal(true)}>{item.name}</li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          {inventory ? <NewInventoryItem item={item} setShowModal={setShowModal} />:
                    <ShoppingListItem item={item} setShowModal={setShowModal}/>          }
        </Modal>
      }
    </>

  )
}
