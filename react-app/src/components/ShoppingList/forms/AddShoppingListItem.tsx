import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { loadMeasurements } from '../../../store/items';
import { addEditShoppingListItem } from '../../../store/shoppingList';
import '../styles/ShoppingListForms.css';
import PackageSizeSelect from '../../PackageSizeSelect';
import FormErrors from '../../FormErrors';
import { Item } from '../../../interfaces';

interface AddShoppingListItemProps {
  item: Item,
  setShowModal: Function,
  hideMenu: Function,
}
export default function AddShoppingListItem({ item, setShowModal, hideMenu }: AddShoppingListItemProps) {
  const dispatch = useAppDispatch();
  const { id: shoppingListId } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setErrors([]);
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
      <FormErrors errors={errors} />
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
      <PackageSizeSelect setMeasurementId={setMeasurementId} />
      <button type="submit" className="stdbutton">Add To List</button>
    </form>
  );
}
