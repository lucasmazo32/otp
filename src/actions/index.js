const action = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  ADD_OPTION: 'ADD_OPTION',
  CLEAR_OPTIONS: 'CLEAR_OPTIONS',
};

const changeFilter = filter => ({
  type: action.CHANGE_FILTER,
  payload: filter,
});

const addOption = option => ({
  type: action.ADD_OPTION,
  payload: option,
});

const clearOptions = () => ({
  type: action.CLEAR_OPTIONS,
});

export default {
  action, changeFilter, addOption, clearOptions,
};
