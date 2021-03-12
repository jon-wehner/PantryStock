const SET_USER = 'session/setUser'

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const user = await response.json()
  dispatch(setUser(user))
  return user
}
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {...state}
      newState.user = action.user
      return newState
    default:
      return state
}
  }

  export default sessionReducer
