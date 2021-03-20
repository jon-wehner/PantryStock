import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories, loadItems } from '../../store/items'
import { loadUserShoppingLists } from "../../store/shoppingList"
import ShoppingListForm from './forms/ShoppingListForm'
import ShoppingListDisplay from './ShoppingListDisplay'
import './Dashboard.css'

export default function Dashboard() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [showShoppingListForm, setShowShoppingListForm] = useState(false)


  useEffect(() => {
    if(user) {
      dispatch(loadItems())
      dispatch(loadCategories())
      dispatch(loadUserShoppingLists(user.id))
    }
  }, [user, dispatch])

  const revealForm = (e) => {
    e.preventDefault()
    setShowShoppingListForm(true)
  }

  return (
    <>
      <h1>hi {user && user.username}!</h1>
      {showShoppingListForm ? <ShoppingListForm setShowForm={setShowShoppingListForm}/> : <button className="stdbutton" onClick={revealForm}>New Shopping List</button>}
      <ShoppingListDisplay />
    </>
  )
}
