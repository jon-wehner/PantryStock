import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadMeasurements } from '../../../store/items'
import { addEditShoppingListItem } from '../../../store/shoppingList'
import { deleteShoppingListItem} from '../../../store/shoppingList'
import './ShoppingListForms.css'

export default function ShoppingListItem({row, setShowModal}) {
  const dispatch = useDispatch();
  const { id: shoppingListId } = useParams();
  const measurements = useSelector(state => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState(row.measurement.id);
  const [quantity, setQuantity] = useState(row.quantity);
  const [errors, setErrors] = useState("")
  useEffect(() => {
    dispatch(loadMeasurements())
    setLoaded(true)
  },[dispatch]);

  const handleSubmit = async (e) => {
    setErrors("")
    e.preventDefault();
    const shoppingListItem = {
      id: row.id,
      measurementId,
      quantity,
      shoppingListId,
      itemId: row.item.id,
      method: 'PUT'
    }
    console.log(shoppingListItem)
    const res = await dispatch(addEditShoppingListItem(shoppingListItem))
    if (res.errors) {
      setErrors(res.errors)
    }
    else {
      setShowModal(false)
    }
  }
  const deleteItem = async (e) => {
    const res = await dispatch(deleteShoppingListItem(row.id, shoppingListId))
    if (!res.errors) {
      setShowModal(false)
    }
  }
  if (!loaded) return null;
  return (
    <div className="itemform__container">
      <form className="shoppingListForm" onSubmit={handleSubmit}>
        <ul className="errors">
        {errors && errors.map(error => <li className="error"key={error}>{error}</li>)}
        </ul>
        <h2>
          Item: {row.item.name}
        </h2>
        <h2>
        Found In: {row.item.category}
        </h2>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <select value={measurementId} onChange={e => setMeasurementId(e.target.value) }>
          {measurements && measurements.map(measurement => <option
                                            value={measurement.id}
                                            key={measurement.id}>
                                              {measurement.unit}
                                            </option>)
                                            }
        </select>
        <button className="stdbutton" >Edit</button>
      </form>
      <button type="none" className="stdbutton" id="deleteItem" onClick={deleteItem}>Delete Item</button>
    </div>
  )
};
