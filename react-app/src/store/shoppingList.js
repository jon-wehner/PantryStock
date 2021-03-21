const SET_SHOPPING_LISTS = 'shoppingLists/set'
const EDIT_SHOPPING_LIST = 'shoppingLists/edit'
const REMOVE_SHOPPING_LIST = 'shoppingLists/remove'

const setShoppingLists = (shoppingLists) => {
  return {
    type: SET_SHOPPING_LISTS,
    shoppingLists
  }
}
const updateShoppingList = (shoppingList) => {
  return {
    type: EDIT_SHOPPING_LIST,
    shoppingList
  }
}

const removeList = (id) => {
  return {
    type: REMOVE_SHOPPING_LIST,
    id
  }
}
export const loadOneShoppingList = id => async (dispatch) => {
  const res = await fetch(`/api/shopping-lists/${id}`)
  if (res.ok) {
    const shoppingList = await res.json()
    dispatch(setShoppingLists(shoppingList))
  }
}
export const loadUserShoppingLists = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/shopping-lists/`);
  const shoppingLists = await res.json();
  if (res.ok){
    dispatch(setShoppingLists(shoppingLists.lists))
  }
  return shoppingLists
}

export const createShoppingList = (name, userId) => async (dispatch) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('user_id', userId);
  const options = {
    method: 'POST',
    body: formData,
  }
  try {
    const res = await fetch('/api/shopping-lists/', options);
    if (!res.ok) throw res
    let shoppingList = await res.json()
    if(!shoppingList.errors) {
      dispatch(setShoppingLists(shoppingList))
    }
    return shoppingList
  }
  catch (err){
    return err;
  }
};

export const editShoppingList = (id, name, userId) => async (dispatch) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('user_id', userId);
  const options = {
    method: 'PUT',
    body: formData,
  }
  try {
    const res = await fetch(`/api/shopping-lists/${id}`, options);
    if (!res.ok) throw res
    const shoppingList = await res.json()
    if(!shoppingList.errors) {
      dispatch(updateShoppingList(shoppingList))
    }
    return shoppingList
  }
  catch (err){
    return err;
  }
}

export const deleteShoppingList = (id) => async (dispatch) => {
  const formData = new FormData();
  formData.append('id', id)
  const options = {
    method: 'DELETE',
    body: formData,
  }
  try {
    const res = await fetch(`/api/shopping-lists/${id}`, options)
    if (!res.ok) throw res
    dispatch(removeList(id))
  }
  catch (err) {
    return err
  }
}

export const addToList = (shoppingListItem) => {

}

const initialState = {}
const shoppingListReducer = (state = initialState, action) => {
  let newState = {}
  switch(action.type) {
    case SET_SHOPPING_LISTS:
      newState = {...state, ...action.shoppingLists};
      return newState;
    case EDIT_SHOPPING_LIST:
      newState = {...state};
      newState[action.shoppingList.id] = action.shoppingList;
      return newState;
    case REMOVE_SHOPPING_LIST:
      newState = {...state};
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default shoppingListReducer
