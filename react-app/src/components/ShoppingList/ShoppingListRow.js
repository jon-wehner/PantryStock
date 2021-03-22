import { useState } from "react"
import { Modal } from "../../context/Modal"
import EditShoppingListItem from "./forms/EditShoppingListItem"

export default function ShoppingListRow ({row}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <li onClick={() => setShowModal(true)}>
        <div>
          {row.quantity}
          {row.measurement.unit}
          {row.item.name}
        </div>
      </li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditShoppingListItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
}
