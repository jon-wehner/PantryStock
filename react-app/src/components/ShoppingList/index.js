import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories, loadItems } from '../../store/items'

export default function ShoppingList() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.list)
  const categories = useSelector((state) => state.items.categories)
  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadCategories())
  }, [dispatch])
  return (
    <div className="shoppingList">
      <p>Coming Soon!</p>
    </div>
  )
}
