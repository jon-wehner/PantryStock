import { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditShoppingListItem from './forms/EditShoppingListItem'
import { addRemoveCart } from '../../store/shoppingList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'


export default function ShoppingListRow ({row}) {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const toggleCart = e => {
    dispatch(addRemoveCart(row.id, row.shoppingListId))
  }
  return (
    <>
      <li onClick={() => setShowModal(true)}>
        <div>
          <p style={row.inCart ? {textDecoration: 'line-through'} : null}>
            {row.quantity}
            {row.measurement.unit}
            {row.item.name}
          </p>
        </div>
      </li>
      <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart}/>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditShoppingListItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
}
