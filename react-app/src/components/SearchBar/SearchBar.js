import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchItems } from  '../../store/items'
import SearchResult from './SearchResult'
import './SearchBar.css'

export default function SearchBar({inventory}) {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const results = useSelector(state => state.items.results)
  useEffect(() => {
    if(query) {
      const timeout = setTimeout(handleSearch, 500)
      return () => clearTimeout(timeout)
      async function handleSearch() {
        await dispatch(searchItems(query))
      }
    }
    setQuery("")
  }, [query, dispatch])
  const handleQuery = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div className="searchBar">
      <input onChange={handleQuery}></input>
      {results &&
        <ul className="searchResults">
          {results && results.map(result => <SearchResult key ={result.id} item={result} inventory={inventory}/>)}
        </ul>
      }
    </div>
  )
}
