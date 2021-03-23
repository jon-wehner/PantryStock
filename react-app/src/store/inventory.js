const SET_inventory = 'inventory/set';

const setInventory = inventory => {
  return {
    type: SET_PANTRY,
    pantry
  }
};

export const addItemToInventory = (inventoryItem) => async (dispatch) => {
  const {itemId, measurementId, quantity, userId, expirationDate} = inventoryItem
  const url = `/api/inventory/${userId}`
  const formData = new FormData()
  formData.append('item_id', itemId)
  formData.append('measurement_id', measurementId)
  formData.append('quantity', quantity)
  formData.append('expiration_date', expirationDate)
  const options = {
    method: 'POST',
    body: formData
  }
  try {
    const res = await fetch(url, options)
    if (!res.ok) throw res
    const inventory = await res.json()
    if(!inventory.errors) {
      dispatch(setInventory(inventory))
    }
    return inventory
  }
  catch (err) {
    return err
  }
};

const initialState = {fridge: null,
                      pantry: null,
                      }
export default inventoryReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case SET_PANTRY:
      newState = {...state};
      newState.fridge = action.fridge;
      newState.pantry = action.pantry;
      return newState;
    default:
      return state;
  }
};
