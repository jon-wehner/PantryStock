import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addItemToInventory } from "../../store/inventory"
import { deleteShoppingListItem, loadOneShoppingList } from "../../store/shoppingList"
import SearchBar from "../SearchBar/SearchBar"
import ShoppingListRow from "./ShoppingListRow"
import './styles/ShoppingList.css'

export default function ShoppingList() {
  const dispatch = useDispatch()
  const { id: shoppingListId } = useParams()
  const list = useSelector(state => state.shoppingLists[shoppingListId])

  useEffect(() => {
    dispatch(loadOneShoppingList(shoppingListId))
  },[dispatch, shoppingListId])

  const transferList = async () => {
    const itemsInCart = []
    list.items.forEach(item => {
      if (item.inCart) {
        itemsInCart.push(item);
      }
    });
    await itemsInCart.forEach(item => {
      item.userId = list.userId
      item.itemId = item.item.id
      delete item.item
      item.measurementId = item.measurement.id
      delete item.measurement

      dispatch(addItemToInventory(item))
    })
    await itemsInCart.forEach(item => {
      dispatch(deleteShoppingListItem(item.id, shoppingListId))
    })
  }

  return (
    <div className="shoppingList__container">
      <SearchBar pantry={false}/>
      {list &&
        <div>
          <p className="shoppingList__title" >{list.name}</p>
          <ul className="shoppingList__itemList">
            {list.items.map(row => <ShoppingListRow key={row.id} row={row} />)}
          </ul>
          {list.items.length > 0 &&
          <button id="addToInv"
            className="stdbutton"
            onClick={transferList}>
            Add crossed items to Inventory
            </button>
          }
        </div>
      }
    </div>
  )
}
