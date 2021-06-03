import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadMeasurements } from '../../../store/items';
import { addEditShoppingListItem } from '../../../store/shoppingList';
import '../styles/ShoppingListForms.css';

export default function AddShoppingListItem({ item, setShowModal, hideMenu }) {
  const dispatch = useDispatch();
  const { id: shoppingListId } = useParams();
  const measurements = useSelector((state) => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState(1);
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setErrors('');
    e.preventDefault();
    const shoppingListItem = {
      measurementId,
      quantity,
      shoppingListId,
      itemId: item.id,
      method: 'POST',
    };
    const res = await dispatch(addEditShoppingListItem(shoppingListItem));
    if (res.errors) {
      setErrors(res.errors);
    } else {
      setShowModal(false);
      hideMenu();
    }
  };

  if (!loaded) return null;
  return (
    <form className="shoppingListForm" onSubmit={handleSubmit}>
      {errors && errors.map((error) => <li key={error}>{error}</li>)}
      <h2>
        Item:
        {' '}
        {item.name}
      </h2>
      <h2>
        Found In:
        {' '}
        {item.category}
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
      <button type="submit" className="stdbutton">Add To List</button>
    </form>
  );
}

AddShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fridge: PropTypes.bool.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
  hideMenu: PropTypes.func.isRequired,
};
