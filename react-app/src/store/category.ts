import { AnyAction } from 'redux';
import { AppDispatch } from '.';
import { Category } from '../interfaces';

const SET_CATEGORIES = 'categories/setCategories';

const setCategories = (categories: Category[]) => ({
  type: SET_CATEGORIES,
  categories,
});

export const loadCategories = () => async (dispatch: AppDispatch) => {
  const res = await fetch('/api/items/categories/');
  if (res.ok) {
    const obj = await res.json();
    dispatch(setCategories(obj.categories));
  }
};

const initialState = null;

const categoryReducer = (state = initialState, action: AnyAction) => {
  let newState;
  switch (action.type) {
    case SET_CATEGORIES:
      newState = action.categories;
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
