import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loadMeasurements } from '../../../store/items';
import { addEditShoppingListItem, deleteShoppingListItem } from '../../../store/shoppingList';

import '../styles/ShoppingListForms.css';
import FormErrors from '../../FormErrors';
import { ShoppingListItemInterface } from '../../../interfaces';

interface EditShoppingListItemProps {
  row: ShoppingListItemInterface,
  setShowModal: Function
}

export default function EditShoppingListItem({ row, setShowModal }: EditShoppingListItemProps) {
  const dispatch = useAppDispatch();
  const { id: shoppingListId } = useParams();
  const measurements = useAppSelector((state) => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState(row.measurement.id);
  const [quantity, setQuantity] = useState(row.quantity);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e) => {
    setErrors([]);
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
        <FormErrors errors={errors} />
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
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
        <select value={measurementId} onChange={(e) => setMeasurementId(parseInt(e.target.value, 10))}>
          {measurements && measurements.map((measurement) => (
            <option
              value={measurement.id}
              key={measurement.id}
            >
              {measurement.unit}
            </option>
          ))}
        </select>
        <button type="submit" className="stdbutton">Edit</button>
      </form>
      <button type="button" className="stdbutton" id="deleteItem" onClick={deleteItem}>Delete Item</button>
    </div>
  );
}
