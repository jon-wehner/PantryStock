import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from '../../store/items'

export default function ShoppingList() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.list)
  useEffect(() => {
    dispatch(loadItems())
  }, [dispatch])
  return (
    <div className="shoppingList">
      <p>Coming Soon!</p>
    </div>
  )
}
