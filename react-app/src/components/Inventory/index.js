import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInventory } from '../../store/inventory';
import PantryCategory from './PantryCategory'

import SearchBar from '../SearchBar/SearchBar';
import './styles/Inventory.css'
import { loadCategories } from '../../store/items';

export default function Inventory() {
  const dispatch = useDispatch();
  const {id: userId} = useParams()

  const [loaded, setLoaded] = useState(false)

  const categories = useSelector(state => state.items.categories);
  const fridge = useSelector(state => state.inventory.fridge);
  const pantry = useSelector(state => state.inventory.pantry);



  useEffect(() => {
    dispatch(getUserInventory(userId))

    if(!categories) {
      dispatch(loadCategories())
    }
    else {
      setLoaded(true)
    }
  },[dispatch, userId, categories])

  if(!loaded) return null
  return (
    <div className="pantry">
      <h1>Welcome to your pantry!</h1>
      <SearchBar inventory={true} />
      <h2>Refrigerator/Freezer</h2>
      {fridge &&
          <section>
            {categories.map(category => {
              const categoryItems = fridge.filter(fridgeItem => fridgeItem.item.categoryId === category.id)
              return <PantryCategory key={category.id} category={category} items={categoryItems} />
            })}
          </section>
      }
      <h2>Pantry</h2>
        {pantry &&
          <section>
            {categories.map(category => {
            const categoryItems = pantry.filter(pantryItem => pantryItem.item.categoryId === category.id)
            return <PantryCategory key={category.id} category={category} items={categoryItems} />
          })}
          </section>
        }
    </div>
  )
};
