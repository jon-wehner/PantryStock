import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function ShoppingList ({shoppingList}) {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(shoppingList.name)

const showInput = e => {
  e.preventDefault()
  setEdit(true)
}

const updateName = e => {
  setName(e.target.value)
}

const saveShoppingList = e => {
  e.preventDefault()
  setEdit(false)
}

  return (
    <div className="shoppingList">
      {edit ? <input value={name} onChange={updateName}></input> : <p>{shoppingList.name}</p>}
      <div style={{ marginLeft: '5rem'}}>
        <button className="shoppingList__buttons" onClick={edit ? saveShoppingList : showInput}><FontAwesomeIcon icon={edit ? faSave : faEdit} /></button>
        <button style={{color : 'red'}}className="shoppingList__buttons"><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>

    </div>
  )
}
