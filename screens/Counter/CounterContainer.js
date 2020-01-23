import React, { useState } from "react";
import CounterPresenter from "./CounterPresenter";

export default CounterContainer = ({
  increaseCount,
  resetCount,
  drinkCount,
  drinkType,
  changeDrink
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, getError] = useState(null);

  return (
    <CounterPresenter
      loaded={loaded}
      increaseCount={increaseCount}
      resetCount={resetCount}
      drinkCount={drinkCount}
      drinkType={drinkType}
      changeDrink={changeDrink}
    />
  );
};
