import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories, loadItems } from '../../store/items'
import ShoppingListForm from './forms/ShoppingListForm'

export default function Dashboard() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [showShoppingListForm, setShowShoppingListForm] = useState(false)


  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadCategories())
  }, [dispatch])

  const revealForm = (e) => {
    e.preventDefault()
    setShowShoppingListForm(true)
  }

  return (
    <>
      <h1>hi {user && user.username}!</h1>
      {showShoppingListForm ? <ShoppingListForm /> : <button className="stdbutton" onClick={revealForm}>New Shopping List</button>}
    </>
  )
}