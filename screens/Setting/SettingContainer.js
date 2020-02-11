import React, { useState } from "react";
import SettingPresenter from "./SettingPresenter";

export default SettingContainer = ({}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, getError] = useState(null);

  return <SettingPresenter loaded={loaded} />;
};
