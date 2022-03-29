import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInventory } from '../../store/inventory';
import InventoryCategory from './InventoryCategory';
import SearchBar from '../SearchBar/SearchBar';
import './styles/Inventory.css';
import { loadCategories } from '../../store/category';

export default function Inventory({ userId }) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const categories = useSelector((state) => state.categories);
  const fridge = useSelector((state) => state.inventory.fridge);
  const pantry = useSelector((state) => state.inventory.pantry);

  useEffect(() => {
    if (userId) {
      dispatch(getUserInventory(userId));
    }

    if (!categories) {
      dispatch(loadCategories());
    } else {
      setLoaded(true);
    }
  }, [dispatch, userId, categories]);

  if (!loaded) return null;
  return (
    <div className="dashboard__wrapper" id="pantry">
      <h1 className="pantryHeading">My Pantry</h1>
      <SearchBar inventory />
      {fridge && (
        <section>
          {fridge.length ? <h2 className="pantryHeading">Refrigerator/Freezer</h2> : <h2 className="pantryHeading">Refrigerator is empty.</h2>}
          {categories.map((category) => {
            const categoryItems = fridge.filter(
              (fridgeItem) => fridgeItem.item.categoryId === category.id,
            );
            return (
              <InventoryCategory key={category.id} category={category} items={categoryItems} />
            );
          })}
        </section>
      )}
      {pantry && (
        <section>
          {pantry.length ? <h2 className="pantryHeading">Pantry</h2> : <h2 className="pantryHeading">Pantry is empty.</h2>}
          {categories.map((category) => {
            const categoryItems = pantry.filter(
              (pantryItem) => pantryItem.item.categoryId === category.id,
            );
            return (
              <InventoryCategory key={category.id} category={category} items={categoryItems} />
            );
          })}
        </section>
      )}
    </div>
  );
}

Inventory.propTypes = {
  userId: PropTypes.number,
};
Inventory.defaultProps = {
  userId: null,
};
