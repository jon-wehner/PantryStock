const SET_CATEGORIES = 'categories/setCategories';

const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const loadCategories = () => async (dispatch) => {
  const res = await fetch('/api/items/categories/');
  if (res.ok) {
    const obj = await res.json();
    dispatch(setCategories(obj.categories));
  }
};

const initialState = null;

const categoryReducer = (state = initialState, action) => {
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
