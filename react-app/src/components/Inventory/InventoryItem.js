import { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditInventoryItem from './forms/EditInventoryItem'
import { getExpirationString } from '../../utils'

export default function InventoryItem({row}) {
  const [showModal, setShowModal] = useState(false);
  console.log()
  return (
    <>
      <tr className="pantryListItem" onClick={() => setShowModal(true)}>
        <td>
          <span>
            ({row.quantity})
          </span>
          <span>
            {` ${row.measurement.unit}${row.quantity > 1 ? 's ' : ' of '}`}
          </span>
        </td>
        <td>
          {row.item.name}
        </td>
        <td>
          {row.expirationDate ? getExpirationString(row.expirationDate) : null}
        </td>
      </tr>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <EditInventoryItem row={row} setShowModal={setShowModal}/>
        </Modal>
      }
    </>
  )
};
