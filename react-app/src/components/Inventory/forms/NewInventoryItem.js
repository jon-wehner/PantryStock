import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToInventory } from '../../../store/inventory';
import { loadMeasurements } from '../../../store/items';
import { getTimeStamp } from '../../../services/utils';
import '../styles/InventoryForms.css';

export default function NewInventoryItem({ item, setShowModal, hideMenu }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const measurements = useSelector((state) => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setErrors('');
    e.preventDefault();
    const inventoryItem = {
      itemId: item.id,
      measurementId,
      quantity,
      userId,
      expirationDate: expirationDate ? getTimeStamp(expirationDate) : null,
    };
    const response = await dispatch(addItemToInventory(inventoryItem));
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setShowModal(false);
      hideMenu();
    }
  };

  if (!loaded) return null;
  return (
    <form className="inventoryForm" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <ul className="errors">
        {errors && errors.map((error) => <li className="error" key={error}>{error}</li>)}
      </ul>
      <h2>
        Item:
        {' '}
        {item.name}
      </h2>
      <label htmlFor="NewInventoryItemQuantity">
        Quantity:
        <input id="NewInventoryItemQuantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <select value={measurementId} onChange={(e) => setMeasurementId(e.target.value)}>
        <option value="">Select Package Size</option>
        {measurements && measurements.map((measurement) => (
          <option
            value={measurement.id}
            key={measurement.id}
          >
            {measurement.unit}
          </option>
        ))}
      </select>
      <label htmlFor="expirationDate">
        Expiration Date:
        <input type="date" name="expirationDate" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </label>
      <button type="submit" className="stdbutton">Add To Pantry</button>
    </form>
  );
}

NewInventoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fridge: PropTypes.bool.isRequired,
    categoryId: PropTypes.number.isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
  hideMenu: PropTypes.func.isRequired,
};
