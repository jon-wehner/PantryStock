import SearchBar from "../SearchBar/SearchBar";

export default function Pantry() {
  return (
    <div>
      <h1>Welcome to your pantry!</h1>
      <SearchBar pantry={true} />
    </div>
  )
}
