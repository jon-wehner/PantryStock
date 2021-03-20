import { useDispatch } from 'react-redux'
import { deleteShoppingList } from '../../../store/shoppingList'


export default function ConfirmDelete({id, setShowModal}) {
  const dispatch = useDispatch()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    await dispatch(deleteShoppingList(id));
    setShowModal(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Are you sure you want to delete this list?</p>
      <button className="stdbutton" style={{backgroundColor : 'red'}}>Delete</button>
    </form>
  )
}
