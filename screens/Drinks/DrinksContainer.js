import React, { useState } from "react";
import DrinksPresenter from "./DrinksPresenter";

export default DrinksContainer = ({
  drinks,
  addDrink,
  editDrink,
  removeDrink,
  removeAllDrinks
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, getError] = useState(null);

  return (
    <DrinksPresenter
      loaded={loaded}
      drinks={drinks}
      addDrink={addDrink}
      editDrink={editDrink}
      removeDrink={removeDrink}
      removeAllDrinks={removeAllDrinks}
    />
  );
};
