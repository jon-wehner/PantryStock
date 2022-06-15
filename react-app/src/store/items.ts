import { AnyAction } from 'redux';
import { AppDispatch } from '.';
import { Item, Measurement } from '../interfaces';

const SET_RESULTS = 'items/setResults';
const SET_MEASUREMENTS = 'items/setMeasurements';

const setResults = (items: Item[]) => ({
  type: SET_RESULTS,
  items,
});

const setMeasurements = (measurements: Measurement[]) => ({
  type: SET_MEASUREMENTS,
  measurements,
});

export const loadMeasurements = () => async (dispatch: AppDispatch) => {
  const res = await fetch('/api/items/measurements/');
  if (res.ok) {
    const { measurements } = await res.json();
    dispatch(setMeasurements(measurements));
  }
};

export const searchItems = (query: string) => async (dispatch: AppDispatch) => {
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

interface ItemState {
  results: Item[],
  measurements: Measurement[]
}

const initialState: ItemState = {
  results: [],
  measurements: [],
};
const itemReducer = (state = initialState, action: AnyAction) => {
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
