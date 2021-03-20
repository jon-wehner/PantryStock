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
    <>
      <h1>Shopping Lists Go Here</h1>
      {Object.values(shoppingLists).map(shoppingList => {
        return <ShoppingList shoppingList={shoppingList} />
      })}
    </>

  )
}
