const SET_USER = 'session/setUser'
const REMOVE_USER = 'session/removeUser'

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}
const removeUser = () => {
  return {
    type: REMOVE_USER,
    user: null
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

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  dispatch(removeUser())
  return await response.json();
};

const initialState = {user : null}

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {...state};
      newState.user = action.user;
      return newState;
    case REMOVE_USER:
      newState = {...state};
      newState.user = action.user;
      return newState;
    default:
      return state;
}
  }

  export default sessionReducer;
