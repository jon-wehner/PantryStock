import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadMeasurements } from '../../../store/items';
import { addEditShoppingListItem } from '../../../store/shoppingList';
import '../styles/ShoppingListForms.css';
import PackageSizeSelect from '../../PackageSizeSelect';
import FormErrors from '../../FormErrors';

export default function AddShoppingListItem({ item, setShowModal, hideMenu }) {
  const dispatch = useDispatch();
  const { id: shoppingListId } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [measurementId, setMeasurementId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(loadMeasurements());
    setLoaded(true);
  }, [dispatch]);

  const handleSubmit = async (e) => {
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

AddShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    fridge: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
  hideMenu: PropTypes.func.isRequired,
};
