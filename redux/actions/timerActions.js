const startTimer = () => ({
  type: "START_TIMER"
});

const stopTimer = () => ({
  type: "STOP_TIMER"
});

const addSecond = () => ({
  type: "ADD_SECOND"
});

const plusHour = () => ({
  type: "PLUS_HOUR"
});

const plusHalfHour = () => ({
  type: "PLUS_HALFHOUR"
});

const setDuration = duration => ({
  type: "SET_DURATION",
  duration
});

const turnOffAlarm = () => ({
  type: "TURNOFF_ALARM"
});

const setElapsedTime = elapsedTime => ({
  type: "SET_ELAPSEDTIME",
  elapsedTime
});

const setTargetTime = targetTime => ({
  type: "SET_TARGETTIME",
  targetTime
});

export const timerActionCreator = {
  startTimer,
  stopTimer,
  addSecond,
  plusHour,
  plusHalfHour,
  setDuration,
  setElapsedTime,
  setTargetTime,
  turnOffAlarm
};
