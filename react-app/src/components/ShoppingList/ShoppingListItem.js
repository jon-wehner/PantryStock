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
      <tr className="shoppingListItem" onClick={() => setShowModal(true)}>
        <td style={row.inCart ? {textDecoration: 'line-through'} : null}>
            ({row.quantity})
            {` ${row.measurement.unit}${row.quantity > 1 ? 's of ' : ' of '}`}
        </td>
        <td>
            {row.item.name}
        </td>
        <td>
          <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart}/>
        </td>
      </tr>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditShoppingListItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
}
