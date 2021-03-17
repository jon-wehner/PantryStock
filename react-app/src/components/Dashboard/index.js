import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories, loadItems } from '../../store/items'

export default function Dashboard() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadCategories())
  }, [dispatch])

  return (
    <>
      <h1>hi {user && user.username}!</h1>
      <button className="stdbutton" >Create Shopping List</button>
    </>
  )
}
