const SET_RESULTS = 'items/setResults'
const SET_CATEGORIES = 'items/setCategories'
const SET_MEASUREMENTS = 'items/setMeasurements'

const setResults = (items) => {
  return {
    type: SET_RESULTS,
    items
  }
};
const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    categories
  }
};
const setMeasurements = (measurements) => {
  return {
    type: SET_MEASUREMENTS,
    measurements
  }
};

export const loadCategories = () => async (dispatch) => {
  const res = await fetch('/api/items/categories/');
  if (res.ok) {
    const obj = await res.json();
    dispatch(setCategories(obj.categories));
  }
}

export const loadMeasurements = () => async (dispatch) => {
  const res = await fetch('/api/items/measurements/');
  if (res.ok) {
    const { measurements } = await res.json();
    dispatch(setMeasurements(measurements));
  }
};

export const searchItems = (query) => async (dispatch) => {
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(query)
  }
  try {
    const res = await fetch('/api/items/', options)
    if (!res.ok) throw res
    const items = await res.json()
    dispatch(setResults(items))
    return items
  }
  catch (err) {
    return err
  }
}
const initialState = {
                      categories: null,
                      results: null,
                    }
const itemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_RESULTS:
      newState= {...state};
      newState.results = Object.values(action.items);
      return newState;
    case SET_CATEGORIES:
      newState = {...state};
      newState.categories = action.categories;
      return newState;
    case SET_MEASUREMENTS:
      newState = {...state};
      newState.measurements = action.measurements;
      return newState;
    default:
      return state;
  }
};
export default itemReducer;
