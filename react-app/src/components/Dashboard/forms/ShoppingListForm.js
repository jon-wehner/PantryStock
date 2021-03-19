import { useState } from "react"

export default function ShoppingListForm({setShowForm}) {
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
