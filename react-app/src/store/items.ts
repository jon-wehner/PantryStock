const SET_RESULTS = 'items/setResults';
const SET_MEASUREMENTS = 'items/setMeasurements';

const setResults = (items) => ({
  type: SET_RESULTS,
  items,
});

const setMeasurements = (measurements) => ({
  type: SET_MEASUREMENTS,
  measurements,
});

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
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(query),
  };
  try {
    const res = await fetch('/api/items/', options);
    if (!res.ok) throw res;
    const items = await res.json();
    dispatch(setResults(items));
    return items;
  } catch (err) {
    return err;
  }
};
const initialState = {
  results: null,
};
const itemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_RESULTS:
      newState = { ...state };
      newState.results = Object.values(action.items);
      return newState;
    case SET_MEASUREMENTS:
      newState = { ...state };
      newState.measurements = action.measurements;
      return newState;
    default:
      return state;
  }
};
export default itemReducer;
