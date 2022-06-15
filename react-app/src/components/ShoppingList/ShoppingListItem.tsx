import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hooks';
import { Modal } from '../../context/Modal';
import EditShoppingListItem from './forms/EditShoppingListItem';
import { addRemoveCart } from '../../store/shoppingList';
import { getQuantityString } from '../../services/utils';
import { ShoppingListItemInterface } from '../../interfaces';

interface ShoppingListItemProps {
  row: ShoppingListItemInterface
}
export default function ShoppingListItem({ row }: ShoppingListItemProps) {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleCart = (e) => {
    e.stopPropagation();
    dispatch(addRemoveCart(row.id, row.shoppingListId));
  };
  return (
    <>
      <tr
        className="shoppingListItem"
        style={row.inCart ? { backgroundColor: '#86CD82' } : { backgroundColor: '#f7f7ff' }}
        onClick={() => setShowModal(true)}
      >
        <td>
          (
          {row.quantity}
          )
          {getQuantityString(row.quantity, row.measurement.unit)}
        </td>
        <td>{row.item.name}</td>
        <td>
          <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart} />
        </td>
      </tr>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditShoppingListItem row={row} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
