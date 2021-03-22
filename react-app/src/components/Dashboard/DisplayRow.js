import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import DeleteButton from './DeleteButton'
import{ editShoppingList } from '../../store/shoppingList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

export default function DisplayRow ({shoppingList}) {
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
  e.preventDefault()
  const newList =  await dispatch(editShoppingList(shoppingList.id, name, shoppingList.userId))
  if (newList.errors) {
    setErrors(newList.errors)
  }
  else {
    setEdit(false)
  }
}

  return (
    <div className="shoppingList">
      {errors && errors.map(error => <li key={error}>{error}</li>)}
      {edit ? <input value={name} onChange={updateName} onKeyPress={handleEnter}></input>
        : <Link to={`/shopping-lists/${shoppingList.id}`}>{shoppingList.name}</Link>}
      <div style={{ marginLeft: '5rem'}}>
        <button className="shoppingList__buttons" onClick={edit ? saveShoppingList : showInput}><FontAwesomeIcon icon={edit ? faSave : faEdit} /></button>
        <DeleteButton id={shoppingList.id} />
      </div>

    </div>
  )
}
