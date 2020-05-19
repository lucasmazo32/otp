const action = {
  CHANGE_FILTER: 'CHANGE_FILTER',
};

const changeFilter = filter => ({
  type: action.CHANGE_FILTER,
  payload: filter,
});

export default {
  action, changeFilter,
};
