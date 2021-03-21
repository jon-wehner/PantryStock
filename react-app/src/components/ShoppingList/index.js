import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { loadOneShoppingList } from "../../store/shoppingList"
import SearchBar from "./SearchBar"
import ShoppingListRow from "./ShoppingListRow"
import './styles/ShoppingList.css'

export default function ShoppingList() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const list = useSelector(state => state.shoppingLists[id])

  useEffect(() => {
    dispatch(loadOneShoppingList(id))
  },[dispatch, id])

  return (
    <div className="shoppingList__container">
      <SearchBar />
      {list &&
        <div>
          <p>{list.name}</p>
          <ul>
            {list.items.map(row => <ShoppingListRow key={row.id} row={row} />)}
          </ul>
        </div>
      }
    </div>
  )
}
