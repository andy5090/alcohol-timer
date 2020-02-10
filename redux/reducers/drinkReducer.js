const addDrink = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      name: action.name,
      amount: action.amount,
      degree: action.degree
    }
  ];
};

const editDrink = (state, action) => {
  return state.map(drink =>
    drink.id === action.id
      ? {
          ...drink,
          name: action.name,
          amount: action.amount,
          degree: action.degree
        }
      : drink
  );
};

const removeDrink = (state, action) => {
  return state.filter(drink => drink.id !== action.id);
};

const removeAllDrinks = state => {
  return state.splice(0, state.length - 1);
};

const drinkReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DRINK":
      return addDrink(state, action);
    case "EDIT_DRINK":
      return editDrink(state, action);
    case "REMOVE_DRINK":
      return removeDrink(state, action);
    case "REMOVE_ALL_DRINKS":
      return removeAllDrinks(state);

    // Default
    default: {
      return state;
    }
  }
};

export default drinkReducer;
