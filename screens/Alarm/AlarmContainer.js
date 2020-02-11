import React, { useState } from "react";
import AlarmPresenter from "./AlarmPresenter";

export default AlarmContainer = ({
  elapsedTime,
  timerDuration,
  alarmOn,
  messages,
  turnOffAlarm
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <AlarmPresenter
      loaded={loaded}
      elapsedTime={elapsedTime}
      timerDuration={timerDuration}
      alarmOn={alarmOn}
      messages={messages}
      turnOffAlarm={turnOffAlarm}
    />
  );
};
