import { useEffect, useState } from 'react'
import { Modal } from '../../context/Modal'
import EditInventoryItem from './forms/EditInventoryItem'

export default function InventoryItem({row}) {
  const [showModal, setShowModal] = useState(false);
  const expires = useState("");

  useEffect(() => {
    const date = new Date()
    console.log(row.expirationDate)
  });

  return (
    <>
      <li className="pantryListItem" onClick={() => setShowModal(true)}>
        <p>
          ({row.quantity})
          {` ${row.measurement.unit}${row.quantity > 1 ? 's of ' : ' of '}`}
          {row.item.name}
          {row.expirationDate}
        </p>
      </li>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditInventoryItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
};
