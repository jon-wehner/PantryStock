import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addItemToInventory } from '../../../store/inventory';
import { loadMeasurements } from '../../../store/items'
import '../styles/InventoryForms.css'

export default function NewInventoryItem({item, setShowModal}) {
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  const measurements = useSelector(state => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("")
  const [errors, setErrors] = useState("")

  useEffect(() => {
    dispatch(loadMeasurements())
    setLoaded(true)
  },[dispatch]);

  const handleSubmit = async (e) => {
    setErrors("")
    e.preventDefault();
    const inventoryItem = {
      itemId: item.id,
      measurementId,
      quantity,
      userId,
      expirationDate
    }
    const response = await dispatch(addItemToInventory(inventoryItem))
    if (response.errors) {
      setErrors(response.errors)
    }
    else {
      setShowModal(false)
    }
  }

  if (!loaded) return null;
  return (
    <form className="inventoryForm" style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
      <ul className="errors">
        {errors && errors.map(error => <li className="error" key={error}>{error}</li>)}
      </ul>
      <h2>
        Item: {item.name}
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
      <input type="date" value={expirationDate} onChange ={e=> setExpirationDate(e.target.value)}/>
      <button className="stdbutton">Add To Pantry</button>
    </form>
  )
};
