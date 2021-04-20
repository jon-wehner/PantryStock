import { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditShoppingListItem from './forms/EditShoppingListItem'
import { addRemoveCart } from '../../store/shoppingList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'


export default function ShoppingListItem ({row}) {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const toggleCart = e => {
    e.stopPropagation();
    dispatch(addRemoveCart(row.id, row.shoppingListId))
  }
  return (
    <>
      <li className="shoppingListItem" onClick={() => setShowModal(true)}>
        <div style={row.inCart ? {textDecoration: 'line-through'} : null}>
          <p>
            ({row.quantity})
            {` ${row.measurement.unit}${row.quantity > 1 ? 's of ' : ' of '}`}
            {row.item.name}
          </p>
        </div>
        <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart}/>
      </li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditShoppingListItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
}
