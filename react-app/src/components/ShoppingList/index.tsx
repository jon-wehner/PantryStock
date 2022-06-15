import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addItemToInventory } from '../../store/inventory';
import { loadCategories } from '../../store/category';
import { deleteShoppingListItem, loadOneShoppingList, editShoppingList } from '../../store/shoppingList';
import DeleteButton from './DeleteButton';
import SearchBar from '../SearchBar/SearchBar';
import ShoppingListCategory from './ShoppingListCategory';
import FormErrors from '../FormErrors';
import './styles/ShoppingList.css';
import { CartItem } from '../../interfaces';

export default function ShoppingList() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const shoppingListId = id ? parseInt(id, 10) : 0;
  const categories = useAppSelector((state) => state.categories);
  const shoppingLists = useAppSelector((state) => state.shoppingLists);
  const list = shoppingLists[shoppingListId];
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  console.log(shoppingLists);
  useEffect(() => {
    dispatch(loadOneShoppingList(id));
    if (!categories) {
      dispatch(loadCategories());
    } else {
      setName(list?.name);
    }
    if (!loaded) setLoaded(true);
  }, [dispatch, id, categories]);

  const saveShoppingList = async (e) => {
    setErrors([]);
    e.preventDefault();
    const newList = await dispatch(editShoppingList(list.id, name, list.userId));
    if (newList.errors) {
      setErrors(newList.errors);
    } else {
      setEdit(false);
    }
  };

  const showInput = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      saveShoppingList(e);
    }
  };

  const transferList = async () => {
    if (list.length) {
      const itemsInCart = list.items.forEach((item: CartItem) => {
        if (item.inCart) {
          itemsInCart.push(item);
        }
      });
      await itemsInCart.forEach((item) => {
        const newItem = item;
        newItem.userId = list.userId;
        newItem.itemId = item.item.id;
        delete newItem.item;
        newItem.measurementId = item.measurement.id;
        delete newItem.measurement;

        dispatch(addItemToInventory(newItem));
      });
      await itemsInCart.forEach((item) => {
        dispatch(deleteShoppingListItem(item.id, id));
      });
    }
  };
  return (
    <div className="dashboard__wrapper">
      <SearchBar inventory={false} />
      <div id="editList">
        {edit ? <input value={name} onChange={updateName} onKeyPress={handleEnter} /> : <h1 className="shoppingList__title">{list?.name}</h1>}
      </div>
      {errors && <FormErrors errors={errors} />}
      <div className="shoppingList__buttonContainer">
        <button className="shoppingList__buttons" type="button" onClick={edit ? saveShoppingList : showInput}>
          <FontAwesomeIcon icon={edit ? faSave : faEdit} />
        </button>
        {list && <DeleteButton id={list.id} />}
      </div>
      {list && list.length === 0 && <h1 className="shoppingList__title">This list has no items, add some!</h1>}
      {categories && list && categories.map((category) => {
        const categoryItems = list.items.filter(
          (listItem) => listItem.item.categoryId === category.id,
        );
        return (
          <ShoppingListCategory key={category.id} category={category} items={categoryItems} />
        );
      })}
      {list && list.items.length > 0 && (
        <button type="button" id="addToInv" className="stdbutton" onClick={transferList}>
          Add items in cart to Inventory
        </button>
      )}
    </div>
  );
}
