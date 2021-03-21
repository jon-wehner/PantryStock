import { useState } from "react"
import { Modal } from "../../context/Modal"
import ShoppingListItem from "./forms/ShoppingListItem"

export default function ShoppingListRow () {
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

        </Modal>
      }
    </>
  )
}
