import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchItems } from  '../../store/items'
import SearchResult from './SearchResult'
import './styles/SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const results = useSelector(state => state.items.results)
  useEffect(() => {
    if(query) {
      const timeout = setTimeout(handleSearch, 2000)
      return () => clearTimeout(timeout)
      async function handleSearch() {
        await dispatch(searchItems(query))
      }
    }
  }, [query, dispatch])
  const handleQuery = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div className="SearchBar">
      <input onChange={handleQuery}></input>
      <ul className="searchResults">
        {results && results.map(result => <SearchResult key ={result.id} item={result} />)}
      </ul>
    </div>
  )
}
