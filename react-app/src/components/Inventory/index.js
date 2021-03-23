import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInventory } from '../../store/inventory';

import SearchBar from '../SearchBar/SearchBar';

export default function Inventory() {
  const dispatch = useDispatch();
  const {id: userId} = useParams()

  const fridge = useSelector(state => state.inventory.fridge);
  const pantry = useSelector(state => state.inventory.pantry);



  useEffect(() => {
    dispatch(getUserInventory(userId))
  },[dispatch, userId])

  return (
    <div>
      <h1>Welcome to your pantry!</h1>
      <h2>Fridge</h2>
      {fridge &&
        <ul>
          {fridge.map(el => <li key={el.id}>{el.item.name}</li>)}
        </ul>
      }
      <h2>Pantry</h2>
        {pantry &&
          <ul>
            {pantry.map(el => <li key={el.id}>{el.item.name}</li>)}
          </ul>
        }
      <SearchBar inventory={true} />
    </div>
  )
};
