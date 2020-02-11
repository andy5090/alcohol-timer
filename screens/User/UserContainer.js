import React, { useState } from "react";
import UserPresenter from "./UserPresenter";

export default UserContainer = ({ changeSex, editWeight, sex, weight }) => {
  const [loading, setLoading] = useState(false);
  console.log(weight);
  return (
    <UserPresenter
      loading={loading}
      changeSex={changeSex}
      editWeight={editWeight}
      sex={sex}
      weight={weight}
    />
  );
};
