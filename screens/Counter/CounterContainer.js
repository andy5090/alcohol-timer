import React, { useState } from "react";
import CounterPresenter from "./CounterPresenter";

export default CounterContainer = ({
  increaseCount,
  resetCount,
  drinkCount,
  changeDrink,
  drinks,
  drinkId,
  sex,
  weight
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, getError] = useState(null);

  return (
    <CounterPresenter
      loaded={loaded}
      increaseCount={increaseCount}
      resetCount={resetCount}
      drinkCount={drinkCount}
      changeDrink={changeDrink}
      drinks={drinks}
      drinkId={drinkId}
      sex={sex}
      weight={weight}
    />
  );
};
