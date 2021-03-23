import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInventory } from '../../store/inventory'
import SearchBar from '../SearchBar/SearchBar';

export default function Inventory() {
  const dispatch = useDispatch();
  const {id: userId} = useParams()

  const fridge = useSelector(state => state.inventory.fridge);
  const pantry = useSelector(state => state.inventory.pantry);

  const [loaded, setLoaded] = useState(false)


  useEffect(()=> {
    dispatch(getUserInventory(userId))
    setLoaded(true)
  },[dispatch, userId]);
  if (!loaded) return null
  return (
    <div>
      <h1>Welcome to your pantry!</h1>
      <h2>Fridge</h2>
      <ul>
        {fridge.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <h2>pantry</h2>
      <ul>
      {pantry.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <SearchBar inventory={true} />
    </div>
  )
};
