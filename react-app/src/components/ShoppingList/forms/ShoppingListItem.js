import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadMeasurements } from '../../../store/items'

export default function shoppingListItem({item}) {
  const dispatch = useDispatch()
  const shoppingListId = useParams()

  const measurements = useSelector(state => state.items.measurements)
  const [measurementId, setMeasurementId]
  useEffect(() => {
    dispatch(loadMeasurements())
    if (measurements) {
      setLoaded(true)
    }
  },[dispatch, measurements, setLoaded])
  return (
    <form>
      <select value={measurementId} onChange={e => setMeasurementId(e.target.value) }>
        {measurements.map(measurement => <option
                                          value={measurement.id}
                                          key={measurement.id}>
                                            {measurement.name}
                                          </option>)
                                          }
      </select>
    </form>
  )
}
