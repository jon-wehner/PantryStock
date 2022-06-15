import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { editInvItem, removeInvItem } from '../../../store/inventory';
import { loadMeasurements } from '../../../store/items';
import { getTimeStamp } from '../../../services/utils';
import '../styles/InventoryForms.css';
import FormErrors from '../../FormErrors';
import { InventoryItemInterface, Measurement } from '../../../interfaces';

interface EditInventoryItemProps {
  row: InventoryItemInterface,
  setShowModal: Function
}

export default function EditInventoryItem({ row, setShowModal }: EditInventoryItemProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.session.id);
  const measurements = useAppSelector((state) => state.items.measurements);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState(row.measurement.id);
  const [quantity, setQuantity] = useState(row.quantity);
  const [expirationDate, setExpirationDate] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [expirationDate, dispatch]);

  useEffect(() => {
    if (row.expirationDate) {
      const date = new Date(row.expirationDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const dateStr = `${year}-${month < 10 ? '0' : null}${month}-${day}`;
      setExpirationDate(dateStr);
    }
  }, [row.expirationDate]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setErrors([]);
    e.preventDefault();
    const inventoryItem = {
      itemId: row.id,
      measurementId,
      quantity,
      userId,
      expirationDate: expirationDate ? getTimeStamp(expirationDate) : null,
    };
    const response = await dispatch(editInvItem(inventoryItem));
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setShowModal(false);
    }
  };

  const handleDelete = async () => {
    setErrors([]);
    const response = await dispatch(removeInvItem(row.id, userId));
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setShowModal(false);
    }
  };
  if (!loaded) return null;
  return (
    <div className="editInvForm">
      <form className="inventoryForm" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <FormErrors errors={errors} />
        <h2>
          Item:
          {' '}
          {row.item.name}
        </h2>
        <label htmlFor="EditInventoryItemQuantity">
          Quantity:
          <input id="EditInventoryItemQuantity" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
        </label>
        <select value={measurementId} onChange={(e) => setMeasurementId(parseInt(e.target.value, 10))}>
          {measurements && measurements.map((measurement: Measurement) => (
            <option
              value={measurement.id}
              key={measurement.id}
            >
              {measurement.unit}
            </option>
          ))}
        </select>
        <label htmlFor="EditInventoryItemExpiration">
          Expiration Date
          <input id="EditInventoryItemExpiration" type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
        </label>
        <button type="submit" className="stdbutton">Edit Item</button>
      </form>
      <button type="button" className="stdbutton" id="deleteInvItem" onClick={handleDelete} style={{ backgroundColor: 'red' }}>Delete Item</button>
    </div>
  );
}
