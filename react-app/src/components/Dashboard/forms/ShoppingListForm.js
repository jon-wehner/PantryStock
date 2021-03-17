import { useState } from "react"

export default function ShoppingListForm() {
  const [name, setName] = useState("")
  const createShoppingList = (e) => {
    e.preventDefault();

  }
  return (
    <form onSubmit={createShoppingList}>
      <input onChange={(e) => setName(e.target.value)}></input>
    </form>
  )
}
