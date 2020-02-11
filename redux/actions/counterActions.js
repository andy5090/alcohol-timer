const increaseCount = () => ({
  type: "INCREASE_COUNT"
});

const resetCount = () => ({
  type: "RESET_COUNT"
});

const changeDrink = drinkId => ({
  type: "CHANGE_DRINK",
  drinkId
});

export const counterActionCreator = {
  increaseCount,
  resetCount,
  changeDrink
};
