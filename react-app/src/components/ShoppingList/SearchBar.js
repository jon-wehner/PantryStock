import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchItems } from  '../../store/items'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const results = useSelector(state => state.items.results)
  const handleQuery = (e) => {
    setQuery(e.target.value)
  }
  useEffect(() => {
    if(query) {
      const timeout = setTimeout(handleSearch, 2000)
      return () => clearTimeout(timeout)
      async function handleSearch() {
        const search = await dispatch(searchItems(query))
      }
    }
  }, [query, dispatch])
  return (
    <div>
      <input onChange={handleQuery}></input>
      {results && results.map(result => <li key={result.id}>{result.name}</li>)}
    </div>
  )
}

/*
  have a search bar on the shopping list page
    input element
  after typing then waiting, query db for items
    onChange, setTimeout
  display list in dropdown autocomplete thing
    data will be held in state variable when it comes back from the db and rendered as a dropdown list

*/
