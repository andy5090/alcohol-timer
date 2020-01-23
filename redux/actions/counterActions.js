const increaseCount = () => ({
  type: "INCREASE_COUNT"
});

const resetCount = () => ({
  type: "RESET_COUNT"
});

const changeDrink = drinkType => ({
  type: "CHANGE_DRINK",
  drinkType
});

export const counterActionCreator = {
  increaseCount,
  resetCount,
  changeDrink
};
