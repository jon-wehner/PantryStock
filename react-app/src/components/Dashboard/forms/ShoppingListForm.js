import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createShoppingList } from '../../../store/shoppingList'

export default function ShoppingListForm({setShowForm}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [errors, setErrors] = useState("")
  const createShoppingList = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={createShoppingList}>
      <label>Name </label>
      <input onChange={(e) => setName(e.target.value)}></input>
      <button className="stdbutton">Create Shopping List</button>
    </form>
  )
}
