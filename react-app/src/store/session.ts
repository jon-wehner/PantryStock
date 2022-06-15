import { AnyAction } from 'redux';
import { AppDispatch } from '.';
import { User } from '../interfaces';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user: User) => ({
  type: SET_USER,
  user,
});
const removeUser = () => ({
  type: REMOVE_USER,
  user: null,
});
export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const user = await response.json();
  dispatch(setUser(user));
  return user;
};

export const logout = () => async (dispatch: AppDispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeUser());
  return response.json();
};

export const signUp = (username: string, email: string, password: string, repeatPassword: string) => async (dispatch: AppDispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      repeat_password: repeatPassword,
    }),
  });
  const user = await response.json();
  if (!user.errors) {
    dispatch(setUser(user));
  }
  return user;
};

export const authenticate = () => async (dispatch: AppDispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const user = await response.json();
    dispatch(setUser(user));
    return user;
  }
  return response.json();
};

interface sessionState {
  username: null | string,
  email: null | string,
  id: null | number,
}

const initialState: sessionState = {
  username: null,
  email: null,
  id: null,
};
const sessionReducer = (state = initialState, action: AnyAction) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = { ...state };
      newState.username = action.user.username;
      newState.email = action.user.email;
      newState.id = action.user.id;
      return newState;
    case REMOVE_USER:
      newState = { ...state };
      newState.username = null;
      newState.email = null;
      newState.id = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
