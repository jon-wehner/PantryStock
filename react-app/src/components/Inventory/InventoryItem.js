import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../context/Modal';
import EditInventoryItem from './forms/EditInventoryItem';
import { getExpirationString, getQuantityString } from '../../services/utils';

export default function InventoryItem({ row }) {
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

InventoryItem.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    expirationDate: PropTypes.string.isRequired,
    measurement: PropTypes.shape({
      id: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      fridge: PropTypes.bool.isRequired,
      categoryId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
