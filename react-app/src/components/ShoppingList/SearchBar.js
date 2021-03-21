import { useState } from "react"
import { useDispatch } from "react-redux"

export default function SearchBar() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const [results, setResults] = ("")
  const handleQuery = async (e) => {
    setQuery(e.target.value)
    setTimeout(fetchResults(), 1000)

    async function fetchResults() {
      const search = await dispatch(searchItems(query))
      setResults(search)
    }
  }
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
