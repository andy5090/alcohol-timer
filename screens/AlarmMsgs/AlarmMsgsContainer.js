import React, { useState } from "react";
import AlarmMsgsPresenter from "./AlarmMsgsPresenter";

export default AlarmMsgsContainer = ({ messages }) => {
  const [loaded, setLoaded] = useState(false);

  return <AlarmMsgsPresenter loaded={loaded} messages={messages} />;
};
