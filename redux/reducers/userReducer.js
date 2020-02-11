const initialState = {
  sex: "male",
  weight: "65"
};

const changeSex = (state, action) => {
  return {
    ...state,
    sex: action.sex
  };
};

const editWeight = (state, action) => {
  return {
    ...state,
    weight: action.weight
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEX":
      return changeSex(state, action);
    case "EDIT_WEIGHT":
      return editWeight(state, action);

    // Default
    default: {
      return state;
    }
  }
};

export default userReducer;
