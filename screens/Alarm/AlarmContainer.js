import React, { useState } from "react";
import AlarmPresenter from "./AlarmPresenter";

export default AlarmContainer = ({
  elapsedTime,
  timerDuration,
  alarmOn,
  messages,
  turnOffAlarm
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <AlarmPresenter
      loading={loading}
      elapsedTime={elapsedTime}
      timerDuration={timerDuration}
      alarmOn={alarmOn}
      messages={messages}
      turnOffAlarm={turnOffAlarm}
    />
  );
};
