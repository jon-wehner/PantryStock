const SET_SHOPPING_LISTS = 'shoppingLists/set'

const setShoppingLists = (shoppingLists) => {
  return {
    type: SET_SHOPPING_LISTS,
    shoppingLists
  }
}

export const loadShoppingLists = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/shopping-lists/`);
  const shoppingLists = await res.json();
  if (res.ok){
    dispatch(setShoppingLists(shoppingLists.lists))
  }
  return shoppingLists
}

export const createShoppingList = (name, userId) => async (dispatch) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('user_id', userId)
  const options = {
    method: 'POST',
    body: formData,
  }
  try {
    const res = await fetch('/api/shopping-lists/', options);
    if (!res.ok) throw res
    const shoppingList = await res.json()
    if(!shoppingList.errors) {
      dispatch(setShoppingLists([shoppingList]))
    }
    return shoppingList
  }
  catch (err){
    return err;
  }
};

const initialState = {
                      userLists: null
                    }

const shoppingListReducer = (state = initialState, action) => {
  let newState = {}
  switch(action.type) {
    case SET_SHOPPING_LISTS:
      newState.userLists = action.shoppingLists
      return newState
    default:
      return state;
  }
}

export default shoppingListReducer
