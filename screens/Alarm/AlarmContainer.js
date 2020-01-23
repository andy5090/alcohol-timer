import React from "react";
import AlarmPresenter from "./AlarmPresenter";

export default AlarmContainer = ({
  elapsedTime,
  timerDuration,
  alarmOn,
  turnOffAlarm
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <AlarmPresenter
      loaded={loaded}
      elapsedTime={elapsedTime}
      timerDuration={timerDuration}
      alarmOn={alarmOn}
      turnOffAlarm={turnOffAlarm}
    />
  );
};
