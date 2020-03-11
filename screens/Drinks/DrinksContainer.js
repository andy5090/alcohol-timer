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
  const [currentEdit, setCurrentEdit] = useState(null);

  const noticeEdit = id => {
    setCurrentEdit(id);
  };

  return (
    <DrinksPresenter
      loaded={loaded}
      drinks={drinks}
      addDrink={addDrink}
      editDrink={editDrink}
      removeDrink={removeDrink}
      removeAllDrinks={removeAllDrinks}
      currentEdit={currentEdit}
      noticeEdit={noticeEdit}
    />
  );
};
