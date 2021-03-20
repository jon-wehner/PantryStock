import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { loadOneShoppingList } from "../../store/shoppingList"

export default function ShoppingList() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const list = useSelector(state => state.shoppingLists[id])

  useEffect(() => {
    dispatch(loadOneShoppingList(id))
  },[dispatch, id])

  return (
    <div className="shoppingList__container">
    {list &&
        <p>{list.name}</p>
      }
    </div>
  )
}
