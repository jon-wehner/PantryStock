import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ShoppingList from "./ShoppingList"

export default function ShoppingListDisplay() {
  const user = useSelector(state => state.session.user)
  const shoppingLists = useSelector(state => state.shoppingLists.userLists)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (user && shoppingLists) {
      setLoaded(true)
    }
  }, [user, shoppingLists])

  if (!loaded) return null
  return (
    <div className="dashboard__shoppingListContainer">
      <h1>Your Shopping Lists</h1>
      {Object.values(shoppingLists).map(shoppingList => {
        return <ShoppingList key={shoppingList.id} list={shoppingList} />
      })}
    </div>

  )
}
