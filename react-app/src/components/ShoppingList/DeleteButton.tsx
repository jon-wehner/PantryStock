import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../../context/Modal';
import ConfirmDelete from '../Dashboard/forms/ConfirmDelete';

interface DeleteButtonProps {
  id: number
}
export default function DeleteButton({ id }: DeleteButtonProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button style={{ color: 'red' }} type="submit" className="shoppingList__buttons" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete id={id} />
        </Modal>
      )}
    </>
  );
}
