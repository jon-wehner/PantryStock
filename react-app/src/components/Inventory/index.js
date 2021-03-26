import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInventory } from '../../store/inventory';
import InventoryItem from './InventoryItem'

import SearchBar from '../SearchBar/SearchBar';
import './styles/Inventory.css'

export default function Inventory() {
  const dispatch = useDispatch();
  const {id: userId} = useParams()

  const fridge = useSelector(state => state.inventory.fridge);
  const pantry = useSelector(state => state.inventory.pantry);



  useEffect(() => {
    dispatch(getUserInventory(userId))
  },[dispatch, userId])

  return (
    <div className="pantry">
      <h1>Welcome to your pantry!</h1>
      <SearchBar inventory={true} />
      <h2>Refrigerator/Freezer</h2>
      {fridge &&
        <ul className="pantryList">
          {fridge.map(el => <InventoryItem key={el.id} row={el} />)}
        </ul>
      }
      <h2>Pantry</h2>
        {pantry &&
          <ul className="pantryList">
            {pantry.map(el => <InventoryItem key={el.id} row={el} />)}
          </ul>
        }
    </div>
  )
};
