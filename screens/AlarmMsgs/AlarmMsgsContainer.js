import React, { useState } from "react";
import AlarmMsgsPresenter from "./AlarmMsgsPresenter";

export default AlarmMsgsContainer = ({
  messages,
  addMessage,
  editMessage,
  removeMessage,
  removeAllMessages
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <AlarmMsgsPresenter
      loaded={loaded}
      messages={messages}
      addMessage={addMessage}
      editMessage={editMessage}
      removeMessage={removeMessage}
      removeAllMessages={removeAllMessages}
    />
  );
};
