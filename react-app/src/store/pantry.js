

const initialState = {fridge: null,
                      pantry: null,
                      }
export default pantryReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case SET_PANTRY:
      newState = {...state};
    default:
      return state;
  }
}
