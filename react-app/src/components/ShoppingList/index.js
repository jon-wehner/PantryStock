import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addItemToInventory } from "../../store/inventory"
import { loadCategories } from "../../store/items"
import { deleteShoppingListItem, loadOneShoppingList } from "../../store/shoppingList"
import SearchBar from "../SearchBar/SearchBar"
import ShoppingListCategory from "./ShoppingListCategory"
import './styles/ShoppingList.css'

export default function ShoppingList() {
  const dispatch = useDispatch()
  const { id: shoppingListId } = useParams()
  const [loaded, setLoaded] = useState(false)
  const categories = useSelector(state => state.items.categories);
  const list = useSelector(state => state.shoppingLists[shoppingListId])

  useEffect(() => {
    dispatch(loadOneShoppingList(shoppingListId))
    if(!categories) {
      dispatch(loadCategories())
    }
    else {
      setLoaded(true)
    }
  },[dispatch, shoppingListId, categories])

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

  if(!loaded) return null
  return (
    <div className="shoppingList__container">
      <SearchBar pantry={false}/>
      {list &&
        <div>
          <h1 className="shoppingList__title" >{list.name}</h1>
          {categories.map(category => {
            const categoryItems = list.items.filter(listItem => listItem.item.categoryId === category.id)
            return <ShoppingListCategory key={category.id} category={category} items={categoryItems} />
          })}
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
