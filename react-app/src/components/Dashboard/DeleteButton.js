import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../context/Modal'
import ConfirmDelete from './forms/ConfirmDelete'

export default function DeleteButton({id}) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button style={{color : 'red'}}className="shoppingList__buttons" onClick={ () => setShowModal(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete id={id} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}
