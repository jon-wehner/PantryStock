import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingList ({shoppingList}) {
  return (
    <div className="shoppingList">
      <p>{shoppingList.name}</p>
      <div style={{ marginLeft: '5rem'}}>
        <button className="shoppingList__buttons"><FontAwesomeIcon icon={faEdit} /></button>
        <button style={{color : 'red'}}className="shoppingList__buttons"><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>

    </div>
  )
}
