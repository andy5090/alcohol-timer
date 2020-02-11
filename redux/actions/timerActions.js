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

const turnOffAlarm = () => ({
  type: "TURNOFF_ALARM"
});

export const timerActionCreator = {
  startTimer,
  stopTimer,
  addSecond,
  plusHour,
  plusHalfHour,
  turnOffAlarm
};
