import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToInventory } from '../../store/inventory';
import { loadCategories } from '../../store/category';
import { deleteShoppingListItem, loadOneShoppingList } from '../../store/shoppingList';
import SearchBar from '../SearchBar/SearchBar';
import ShoppingListCategory from './ShoppingListCategory';
import './styles/ShoppingList.css';

export default function ShoppingList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const categories = useSelector((state) => state.categories);
  const list = useSelector((state) => state.shoppingLists[id]);

  useEffect(() => {
    dispatch(loadOneShoppingList(id));
    if (!categories) {
      dispatch(loadCategories());
    } else {
      setLoaded(true);
    }
  }, [dispatch, id, categories]);
  const transferList = async () => {
    const itemsInCart = [];
    list.items.forEach((item) => {
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
  };

  if (!loaded) return null;
  return (
    <div className="shoppingList__container">
      <SearchBar pantry={false} />
      {list && (
        <div>
          <h1 className="shoppingList__title">{list.name}</h1>
          {categories.map((category) => {
            const categoryItems = list.items.filter(
              (listItem) => listItem.item.categoryId === category.id,
            );
            return (
              <ShoppingListCategory key={category.id} category={category} items={categoryItems} />
            );
          })}
          {list.items.length > 0 && (
            <button type="button" id="addToInv" className="stdbutton" onClick={transferList}>
              Add items in cart to Inventory
            </button>
          )}
        </div>
      )}
    </div>
  );
}
