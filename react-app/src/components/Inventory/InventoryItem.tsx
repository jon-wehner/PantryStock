import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditInventoryItem from './forms/EditInventoryItem';
import { getExpirationString, getQuantityString } from '../../services/utils';
import { InventoryItemInterface } from '../../interfaces';

interface InventoryItemProps {
  row: InventoryItemInterface
}
export default function InventoryItem({ row }: InventoryItemProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr className="pantryListItem" onClick={() => setShowModal(true)}>
        <td>
          (
          {row.quantity}
          )
          {getQuantityString(row.quantity, row.measurement.unit)}
        </td>
        <td>
          {row.item.name}
        </td>
        <td>
          {row.expirationDate ? getExpirationString(row.expirationDate) : null}
        </td>
      </tr>
      {showModal
        && (
        <Modal onClose={() => setShowModal(false)}>
          <EditInventoryItem row={row} setShowModal={setShowModal} />
        </Modal>
        )}
    </>
  );
}
