import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadMeasurements } from '../../../store/items'

export default function ShoppingListItem({item}) {
  const dispatch = useDispatch();
  const shoppingListId = useParams();
  const measurements = useSelector(state => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    dispatch(loadMeasurements())
    setLoaded(true)
  },[]);
  if (!loaded) return null;
  return (
    <form>
      <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <select value={measurementId} onChange={e => setMeasurementId(e.target.value) }>
        {measurements && measurements.map(measurement => <option
                                          value={measurement.id}
                                          key={measurement.id}>
                                            {measurement.unit}
                                          </option>)
                                          }
      </select>
    </form>
  )
};
