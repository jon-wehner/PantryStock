const itemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type ) {
    case SET_ITEMS:
      newState = {...state};
      newState.list = action.items
  }
}
