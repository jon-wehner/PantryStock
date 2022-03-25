import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import DeleteButton from './DeleteButton';
import { editShoppingList } from '../../store/shoppingList';
import FormErrors from '../FormErrors';

export default function DisplayRow({ shoppingList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(shoppingList.name);
  const [errors, setErrors] = useState([]);

  const showInput = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };
  const saveShoppingList = async (e) => {
    setErrors([]);
    e.preventDefault();
    const newList = await dispatch(editShoppingList(shoppingList.id, name, shoppingList.userId));
    if (newList.errors) {
      setErrors(newList.errors);
    } else {
      setEdit(false);
    }
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      saveShoppingList(e);
    }
  };
  const goToList = () => {
    navigate(`../shopping-lists/${shoppingList.id}`);
  };

  return (
    <button className="shoppingList" type="button" onClick={goToList}>
      {edit ? <input value={name} onChange={updateName} onKeyPress={handleEnter} />
        : shoppingList.name}
      {errors && <FormErrors errors={errors} />}
      <div>
        {shoppingList && shoppingList.items.length}
        {' '}
        items
      </div>
    </button>
  );
}

DisplayRow.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
