const DEFAULT_TIMER_DURATION = 3;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: DEFAULT_TIMER_DURATION,
  alarmOn: false
};

const startTimer = state => {
  return {
    ...state,
    isPlaying: true,
    alarmOn: false
  };
};
const stopTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: DEFAULT_TIMER_DURATION,
    alarmOn: false
  };
};
const addSecond = state => {
  if (state.elapsedTime < state.timerDuration) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false,
      elapsedTime: 0,
      alarmOn: true
    };
  }
};
const plusHour = state => {
  return {
    ...state,
    timerDuration: state.timerDuration + 3600
  };
};
const plusHalfHour = state => {
  return {
    ...state,
    timerDuration: state.timerDuration + 1800
  };
};
const turnOffAlarm = state => {
  return {
    ...state,
    alarmOn: false
  };
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return startTimer(state);
    case "STOP_TIMER":
      return stopTimer(state);
    case "ADD_SECOND":
      return addSecond(state);
    case "PLUS_HOUR":
      return plusHour(state);
    case "PLUS_HALFHOUR":
      return plusHalfHour(state);
    case "TURNOFF_ALARM":
      return turnOffAlarm(state);
    // Default
    default: {
      return state;
    }
  }
};

export default timerReducer;
