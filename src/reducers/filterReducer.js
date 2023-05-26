import { SET_FILTER } from '../actions/types';

const initialState = {
  filter: 'all'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
