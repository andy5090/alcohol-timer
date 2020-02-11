const addDrink = (id, name, amount, degree) => ({
  type: "ADD_DRINK",
  id,
  name,
  amount,
  degree
});

const editDrink = (id, name, amount, degree) => ({
  type: "EDIT_DRINK",
  id,
  name,
  amount,
  degree
});

const removeDrink = id => ({
  type: "REMOVE_DRINK",
  id
});

const removeAllDrinks = () => ({
  type: "REMOVE_ALL_DRINKS"
});

export const drinkActionCreator = {
  addDrink,
  editDrink,
  removeDrink,
  removeAllDrinks
};
