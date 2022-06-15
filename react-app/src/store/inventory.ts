import { AnyAction } from 'redux';
import { AppDispatch } from '.';
import { InventoryItemInterface } from '../interfaces';

const SET_INVENTORY = 'inventory/set';

const setInventory = (inventory) => ({
  type: SET_INVENTORY,
  inventory,
});

export const getUserInventory = (id) => async (dispatch: AppDispatch) => {
  const url = `/api/inventory/${id}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw res;
    const inventory = await res.json();
    if (!res.errors) {
      dispatch(setInventory(inventory.inventory));
    }
    return inventory;
  } catch (err) {
    return err;
  }
};

export const addItemToInventory = (inventoryItem) => async (dispatch: AppDispatch) => {
  const {
    itemId, measurementId, quantity, userId,
  } = inventoryItem;
  const url = `/api/inventory/${userId}`;
  const formData = new FormData();
  formData.append('item_id', itemId);
  formData.append('measurement_id', measurementId);
  formData.append('quantity', quantity);
  if (inventoryItem.expirationDate) {
    formData.append('expiration_date', inventoryItem.expirationDate);
  }
  const options = {
    method: 'POST',
    body: formData,
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const inventory = await res.json();
    if (!inventory.errors) {
      dispatch(setInventory(inventory.inventory));
    }
    return inventory;
  } catch (err) {
    return err;
  }
};

export const editInvItem = (inventoryItem) => async (dispatch: AppDispatch) => {
  const {
    itemId, measurementId, quantity, userId, expirationDate,
  } = inventoryItem;
  const url = `/api/inventory/${userId}/${itemId}`;
  const formData = new FormData();
  formData.append('measurement_id', measurementId);
  formData.append('quantity', quantity);
  if (expirationDate) {
    formData.append('expiration_date', expirationDate);
  }
  const options = {
    method: 'PUT',
    body: formData,
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const inventory = await res.json();
    if (!inventory.errors) {
      dispatch(setInventory(inventory.inventory));
    }
    return inventory;
  } catch (err) {
    return (err);
  }
};

export const removeInvItem = (id, userId) => async (dispatch: AppDispatch) => {
  const url = `/api/inventory/${userId}/${id}`;
  const options = {
    method: 'DELETE',
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const inventory = await res.json();
    if (!inventory.errors) {
      dispatch(setInventory(inventory.inventory));
    }
    return inventory;
  } catch (err) {
    return err;
  }
};

interface inventoryState {
  fridge: InventoryItemInterface[]
  pantry: InventoryItemInterface[]


}
const initialState: inventoryState = {
  fridge: [],
  pantry: [],
};
const inventoryReducer = (state = initialState, action: AnyAction) => {
  let newState;
  switch (action.type) {
    case SET_INVENTORY:
      newState = { ...state };
      newState.fridge = action.inventory.fridge;
      newState.pantry = action.inventory.pantry;
      return newState;
    default:
      return state;
  }
};

export default inventoryReducer;
