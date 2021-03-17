const SET_ITEMS = 'items/setItems'

const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items
  }
}
const initialState = { list: null}
export default itemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type ) {
    case SET_ITEMS:
      newState = {...state};
      newState.list = action.items
      return newState
  }
}
