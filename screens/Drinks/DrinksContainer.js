import React, { useState } from "react";
import DrinksPresenter from "./DrinksPresenter";

export default DrinksContainer = ({ drinkType, changeDrink }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, getError] = useState(null);

  return (
    <DrinksPresenter
      loaded={loaded}
      drinkType={drinkType}
      changeDrink={changeDrink}
    />
  );
};
