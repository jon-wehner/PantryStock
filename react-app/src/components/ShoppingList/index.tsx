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
import { CartItem, Category, ShoppingListInterface } from '../../interfaces';

export default function ShoppingList() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const shoppingListId = id ? parseInt(id, 10) : 0;
  const categories = useAppSelector((state) => state.categories);
  const shoppingLists = useAppSelector((state) => state.shoppingLists);
  const list: ShoppingListInterface = shoppingLists[shoppingListId];
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(loadOneShoppingList(id));
    if (!categories) {
      dispatch(loadCategories());
    } else {
      setName(list?.name);
    }
    if (!loaded) setLoaded(true);
  }, [dispatch, id, categories]);

  const saveShoppingList = async () => {
    setErrors([]);
    const newList = await dispatch(editShoppingList(list.id, name, list.userId));
    if (newList.errors) {
      setErrors(newList.errors);
    } else {
      setEdit(false);
    }
  };

  const showInput = () => {
    setEdit(true);
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveShoppingList();
    }
  };

  const transferList = async () => {
    if (list.items.length) {
      const itemsInCart = list.items.filter((item) => item.inCart);
      await itemsInCart.forEach((item) => {
        const newItem: CartItem = {
          ...item, userId: list.userId, itemId: item.item.id, measurementId: item.measurement.id,
        };
        delete newItem.item;
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
      {list && list.items.length === 0 && <h1 className="shoppingList__title">This list has no items, add some!</h1>}
      {categories && list && categories.map((category: Category) => {
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
