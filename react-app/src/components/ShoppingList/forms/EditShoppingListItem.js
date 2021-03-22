import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadMeasurements } from '../../../store/items'
import { addEditShoppingListItem } from '../../../store/shoppingList'
import { deleteShoppingListItem} from '../../../store/shoppingList'

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
    <>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
        {errors && errors.map(error => <li key={error}>{error}</li>)}
        {row.item.name}
        {row.item.category}
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <select value={measurementId} onChange={e => setMeasurementId(e.target.value) }>
          {measurements && measurements.map(measurement => <option
                                            value={measurement.id}
                                            key={measurement.id}>
                                              {measurement.unit}
                                            </option>)
                                            }
        </select>
        <button>Edit</button>
      </form>
      <button type="none" onClick={deleteItem}>Delete Item</button>
    </>
  )
};
