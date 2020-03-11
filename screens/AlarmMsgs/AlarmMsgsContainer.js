import React, { useState } from "react";
import AlarmMsgsPresenter from "./AlarmMsgsPresenter";

export default AlarmMsgsContainer = ({ messages }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  const noticeEdit = id => {
    setCurrentEdit(id);
  };

  return (
    <AlarmMsgsPresenter
      loaded={loaded}
      messages={messages}
      currentEdit={currentEdit}
      noticeEdit={noticeEdit}
    />
  );
};
