import { AnyAction } from 'redux';
import { ShoppingListInterface, ShoppingListItemData } from '../interfaces';
import { AppDispatch } from '.';

const SET_SHOPPING_LISTS = 'shoppingLists/set';
const EDIT_SHOPPING_LIST = 'shoppingLists/edit';
const REMOVE_SHOPPING_LIST = 'shoppingLists/remove';

const setShoppingLists = (shoppingLists: ShoppingListInterface[]) => ({
  type: SET_SHOPPING_LISTS,
  shoppingLists,
});
const updateShoppingList = (shoppingList: ShoppingListInterface[]) => ({
  type: EDIT_SHOPPING_LIST,
  shoppingList,
});

const removeList = (id: number) => ({
  type: REMOVE_SHOPPING_LIST,
  id,
});

export const loadOneShoppingList = (id: number) => async (dispatch: AppDispatch) => {
  const res = await fetch(`/api/shopping-lists/${id}`);
  if (res.ok) {
    const shoppingList = await res.json();
    dispatch(setShoppingLists(shoppingList));
  }
};
export const loadUserShoppingLists = (userId: number) => async (dispatch: AppDispatch) => {
  const res = await fetch(`/api/users/${userId}/shopping-lists/`);
  const shoppingLists = await res.json();
  if (res.ok) {
    dispatch(setShoppingLists(shoppingLists.lists));
  }
  return shoppingLists;
};

export const createShoppingList = (name: string, userId: number) => async (dispatch: AppDispatch) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('user_id', userId.toString());
  const options = {
    method: 'POST',
    body: formData,
  };
  try {
    const res = await fetch('/api/shopping-lists/', options);
    if (!res.ok) throw res;
    const shoppingList = await res.json();
    if (!shoppingList.errors) {
      dispatch(setShoppingLists(shoppingList));
    }
    return shoppingList;
  } catch (err) {
    return err;
  }
};

export const editShoppingList = (id: number, name: string, userId: number) => async (dispatch: AppDispatch) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('user_id', userId.toString());
  const options = {
    method: 'PUT',
    body: formData,
  };
  try {
    const res = await fetch(`/api/shopping-lists/${id}`, options);
    if (!res.ok) throw res;
    const shoppingList = await res.json();
    if (!shoppingList.errors) {
      dispatch(updateShoppingList(shoppingList));
    }
    return shoppingList;
  } catch (err) {
    return err;
  }
};

// eslint-disable-next-line consistent-return
export const deleteShoppingList = (id:number) => async (dispatch: AppDispatch) => {
  const formData = new FormData();
  formData.append('id', id.toString());
  const options = {
    method: 'DELETE',
    body: formData,
  };
  try {
    const res = await fetch(`/api/shopping-lists/${id}`, options);
    if (!res.ok) throw res;
    dispatch(removeList(id));
  } catch (err) {
    return err;
  }
};

export const addEditShoppingListItem = (shoppingListItem: ShoppingListItemData) => async (dispatch: AppDispatch) => {
  const {
    measurementId, quantity, shoppingListId, itemId, method,
  } = shoppingListItem;

  const formData = new FormData();
  formData.append('item_id', itemId.toString());
  formData.append('measurement_id', measurementId.toString());
  formData.append('quantity', quantity.toString());
  const options = {
    method,
    body: formData,
  };
  let url;
  if (method === 'POST') {
    url = `/api/shopping-lists/${shoppingListId}/items`;
  } else {
    const { id } = shoppingListItem;
    url = `/api/shopping-lists/${shoppingListId}/items/${id}`;
  }

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const newShoppingList = await res.json();
    if (!newShoppingList.errors) {
      dispatch(setShoppingLists(newShoppingList));
    }
    return newShoppingList;
  } catch (err) {
    return err;
  }
};

export const deleteShoppingListItem = (id: number, shoppingListId: number) => async (dispatch: AppDispatch) => {
  const url = `/api/shopping-lists/${shoppingListId}/items/${id}`;
  const options = {
    method: 'DELETE',
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const shoppingList = await res.json();
    dispatch(setShoppingLists(shoppingList));
    return shoppingList;
  } catch (err) {
    return err;
  }
};

export const addRemoveCart = (id: number, shoppingListId: number) => async (dispatch: AppDispatch) => {
  const url = `/api/shopping-lists/${shoppingListId}/items/${id}`;
  const options = {
    method: 'PATCH',
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw res;
    const shoppingList = await res.json();
    dispatch(setShoppingLists(shoppingList));
    return shoppingList;
  } catch (err) {
    return err;
  }
};

const initialState: {[index: number] : ShoppingListInterface} = {};

const shoppingListReducer = (state = initialState, action: AnyAction) => {
  let newState: {[index: number] : ShoppingListInterface} = {};
  switch (action.type) {
    case SET_SHOPPING_LISTS:
      return { ...state, ...action.shoppingLists };
    case EDIT_SHOPPING_LIST:
      newState = { ...state };
      newState[action.shoppingList.id] = action.shoppingList;
      return newState;
    case REMOVE_SHOPPING_LIST:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default shoppingListReducer;
