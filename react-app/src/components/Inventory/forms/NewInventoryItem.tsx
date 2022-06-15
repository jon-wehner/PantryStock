import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addItemToInventory } from '../../../store/inventory';
import { loadMeasurements } from '../../../store/items';
import { getTimeStamp } from '../../../services/utils';
import '../styles/InventoryForms.css';
import PackageSizeSelect from '../../PackageSizeSelect';
import FormErrors from '../../FormErrors';
import { Item } from '../../../interfaces';

interface NewInventoryItemProps {
  item: Item,
  setShowModal: Function,
  hideMenu: Function
}
export default function NewInventoryItem({ item, setShowModal, hideMenu }: NewInventoryItemProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.session.id);

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setErrors([]);
    e.preventDefault();
    const inventoryItem = {
      itemId: item.id,
      measurementId,
      quantity,
      userId,
      expirationDate: expirationDate ? getTimeStamp(expirationDate) : null,
    };
    const res = await dispatch(addItemToInventory(inventoryItem));
    if (res.errors) {
      setErrors(res.errors);
    } else {
      setShowModal(false);
      hideMenu();
    }
  };

  if (!loaded) return null;
  return (
    <form className="inventoryForm" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <FormErrors errors={errors} />
      <h2>
        Item:
        {' '}
        {item.name}
      </h2>
      <label htmlFor="NewInventoryItemQuantity">
        Quantity:
        <input id="NewInventoryItemQuantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <PackageSizeSelect setMeasurementId={setMeasurementId} />
      <label htmlFor="expirationDate">
        Expiration Date:
        <input type="date" name="expirationDate" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </label>
      <button type="submit" className="stdbutton">Add To Pantry</button>
    </form>
  );
}
