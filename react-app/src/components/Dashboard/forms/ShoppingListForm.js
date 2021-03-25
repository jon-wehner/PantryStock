import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createShoppingList } from '../../../store/shoppingList'
import './ShoppingListForm.css'

export default function ShoppingListForm({setShowForm}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shoppingList = await dispatch(createShoppingList(name, user.id))
    if(!shoppingList.errors) {
      setShowForm(false);
    }
    else {
      setErrors(shoppingList.errors)
    }
  };

  return (
    <form className="shoppingList__form" onSubmit={handleSubmit}>
      {errors &&
        <ul className="errors">
          {errors.map(error=> <li key={error}>{error}</li>)}
        </ul>
      }
      <input pleaceholder="Enter Name..." onChange={(e) => setName(e.target.value)}></input>
      <button className="stdbutton">Create Shopping List</button>
    </form>
  )
}
