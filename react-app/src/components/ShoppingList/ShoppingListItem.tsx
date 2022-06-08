import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditShoppingListItem from './forms/EditShoppingListItem';
import { addRemoveCart } from '../../store/shoppingList';
import { getQuantityString } from '../../services/utils';

export default function ShoppingListItem({ row }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleCart = (e) => {
    e.stopPropagation();
    dispatch(addRemoveCart(row.id, row.shoppingListId));
  };
  return (
    <>
      <tr
        className="shoppingListItem"
        style={row.inCart ? { backgroundColor: '#86CD82' } : null}
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

ShoppingListItem.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
    shoppingListId: PropTypes.number.isRequired,
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
