import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadMeasurements } from '../../../store/items';
import { addEditShoppingListItem, deleteShoppingListItem } from '../../../store/shoppingList';

import '../styles/ShoppingListForms.css';

export default function EditShoppingListItem({ row, setShowModal }) {
  const dispatch = useDispatch();
  const { id: shoppingListId } = useParams();
  const measurements = useSelector((state) => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState(row.measurement.id);
  const [quantity, setQuantity] = useState(row.quantity);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setErrors('');
    e.preventDefault();
    const shoppingListItem = {
      id: row.id,
      measurementId,
      quantity,
      shoppingListId,
      itemId: row.item.id,
      method: 'PUT',
    };
    const res = await dispatch(addEditShoppingListItem(shoppingListItem));
    if (res.errors) {
      setErrors(res.errors);
    } else {
      setShowModal(false);
    }
  };
  const deleteItem = async () => {
    const res = await dispatch(deleteShoppingListItem(row.id, shoppingListId));
    if (!res.errors) {
      setShowModal(false);
    }
  };
  if (!loaded) return null;
  return (
    <div className="itemform__container">
      <form className="shoppingListForm" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors && errors.map((error) => <li className="error" key={error}>{error}</li>)}
        </ul>
        <h2>
          Item:
          {' '}
          {row.item.name}
        </h2>
        <h2>
          Found In:
          {' '}
          {row.item.category}
        </h2>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <select value={measurementId} onChange={(e) => setMeasurementId(e.target.value)}>
          {measurements && measurements.map((measurement) => (
            <option
              value={measurement.id}
              key={measurement.id}
            >
              {measurement.unit}
            </option>
          ))}
        </select>
        <button type="button" className="stdbutton">Edit</button>
      </form>
      <button type="button" className="stdbutton" id="deleteItem" onClick={deleteItem}>Delete Item</button>
    </div>
  );
}

EditShoppingListItem.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
    shoppingListId: PropTypes.number.isRequired,
    measurement: PropTypes.shape({
      id: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      fridge: PropTypes.bool.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
};
