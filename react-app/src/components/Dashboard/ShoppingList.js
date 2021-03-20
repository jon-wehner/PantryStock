import './Dashboard.css'
export default function ShoppingList ({shoppingList}) {
  return (
    <div className="shoppingList">
      <p>{shoppingList.name}</p>
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}
