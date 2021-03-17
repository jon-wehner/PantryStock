const SET_ITEMS = 'items/setItems'

const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items
  }
}
export const loadItems = () => async (dispatch) => {
  const res = await fetch('/api/items/');
  if (res.ok) {
    const items = await res.json();
    console.log(items)
    dispatch(setItems(items));
  }
};
const initialState = { list: null}
const itemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ITEMS:
      newState = {...state};
      newState.list = action.items
      return newState
    default:
      return state;
  }
};
export default itemReducer;
