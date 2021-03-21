import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function SearchResult ({item}) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const addToList = () => {
    // dispatch(addToList)
  }
  return (
    <li onClick={addToList}>{item.name}</li>
  )
}
