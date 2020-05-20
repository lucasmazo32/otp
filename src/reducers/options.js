import actions from '../actions/index';

const { action } = actions;
const { ADD_OPTION, CLEAR_OPTIONS } = action;

const filterReducer = (state = ['All'], action) => {
  switch (action.type) {
    case ADD_OPTION:
      return [...state, action.payload];
    case CLEAR_OPTIONS:
      return ['All'];
    default:
      return state;
  }
};

export default filterReducer;
