
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
      dispatch()
    }
    return shoppingList
  }
  catch (err){
    return err;
  }
};

const initialState = {}

const shoppingListReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    default:
      return newState;
  }
}

export default shoppingListReducer
