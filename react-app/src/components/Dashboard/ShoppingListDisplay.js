import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DisplayRow from "./DisplayRow"

export default function ShoppingListDisplay() {
  const user = useSelector(state => state.session.user)
  const shoppingLists = useSelector(state => state.shoppingLists)

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
        return <DisplayRow key={shoppingList.id} shoppingList={shoppingList} />
      })}
    </div>

  )
}
