import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadMeasurements } from '../../../store/items'
import { editListItem } from '../../../store/shoppingList'

export default function ShoppingListItem({item, setShowModal}) {
  const dispatch = useDispatch();
  const { id: shoppingListId } = useParams();
  const measurements = useSelector(state => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState("")

  useEffect(() => {
    dispatch(loadMeasurements())
    setLoaded(true)
  },[dispatch]);

  const handleSubmit = async (e) => {
    setErrors("")
    e.preventDefault();
    const shoppingListItem = {
      measurementId,
      quantity,
      shoppingListId,
      itemId: item.id
    }
    const res = await dispatch(editListItem(shoppingListItem))
    if (res.errors) {
      setErrors(res.errors)
    }
    else {
      setShowModal(false)
    }
  }

  if (!loaded) return null;
  return (
    <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
      {errors && errors.map(error => <li key={error}>{error}</li>)}
      {item.name}
      {item.category}
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
      <button type="none" onClick={deleteItem}>Delete Item</button>
    </form>
  )
};
