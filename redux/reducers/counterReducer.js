const initialState = {
  drinkCount: 0,
  drinkId: null
};

function increaseCount(state) {
  return {
    ...state,
    drinkCount: state.drinkCount + 1
  };
}
function resetCount(state) {
  return {
    ...state,
    drinkCount: 0
  };
}
function changeDrink(state, action) {
  return {
    ...state,
    drinkId: action.drinkId
  };
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return increaseCount(state);
    case "RESET_COUNT":
      return resetCount(state);
    case "CHANGE_DRINK":
      return changeDrink(state, action);

    // Default
    default: {
      return state;
    }
  }
};

export default counterReducer;
