import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import{ editShoppingList } from '../../store/shoppingList'
import DeleteButton from './DeleteButton'

export default function ShoppingList ({shoppingList}) {
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(shoppingList.name)
  const [errors, setErrors] = useState("")

const showInput = e => {
  e.preventDefault()
  setEdit(true)
}

const updateName = e => {
  setName(e.target.value)
}

const handleEnter = e => {
  if (e.key === 'Enter') {
    saveShoppingList(e)
  }
}
const saveShoppingList = async e => {
  const newList =  await dispatch(editShoppingList(shoppingList.id, name, shoppingList.user_id))
  if (newList.errors) {
    setErrors(newList.errors)
  } else {
    setEdit(false)
  }
}

  return (
    <div className="shoppingList">
      {errors && errors.map(error => <li key={error}>{error}</li>)}
      {edit ? <input value={name} onChange={updateName} onKeyPress={handleEnter}></input>
        : <p>{shoppingList.name}</p>}
      <div style={{ marginLeft: '5rem'}}>
        <button className="shoppingList__buttons" onClick={edit ? saveShoppingList : showInput}><FontAwesomeIcon icon={edit ? faSave : faEdit} /></button>
        <DeleteButton id={shoppingList.id} />
      </div>

    </div>
  )
}
