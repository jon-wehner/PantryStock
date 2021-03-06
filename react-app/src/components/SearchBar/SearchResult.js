import { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddShoppingListItem from '../ShoppingList/forms/AddShoppingListItem';
import NewInventoryItem from '../Inventory/forms/NewInventoryItem'

export default function SearchResult ({item, inventory, hideMenu}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li onClick={() => {
        setShowModal(true)
      }
        }>{item.name}</li>
      {showModal &&
        <Modal onClose={() => {
          setShowModal(false)
          }}>
            {inventory ? <NewInventoryItem item={item}
                          setShowModal={setShowModal}
                          hideMenu={hideMenu}/>:
                        <AddShoppingListItem
                          item={item}
                          setShowModal={setShowModal}
                          hideMenu={hideMenu}
                          />          }
        </Modal>
      }
    </>
  )
}
