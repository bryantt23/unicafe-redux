const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

exports.counterReducer = function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1 };
    case 'OK':
      return state;
    case 'BAD':
      return state;
    case 'ZERO':
      return state;
    default:
      return state;
  }
};
