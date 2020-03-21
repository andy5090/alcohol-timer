const DEFAULT_TIMER_DURATION = 18000;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: DEFAULT_TIMER_DURATION,
  alarmOn: false,
  targetTime: null
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
      timerDuration: DEFAULT_TIMER_DURATION,
      elapsedTime: 0,
      alarmOn: true
    };
  }
};
const plusHour = state => {
  return {
    ...state,
    timerDuration: state.timerDuration + 36000
  };
};
const plusHalfHour = state => {
  return {
    ...state,
    timerDuration: state.timerDuration + 18000
  };
};
const setDuration = (state, action) => {
  return { ...state, elapsedTime: 0, timerDuration: action.duration / 100 };
};
const setElapsedTime = (state, action) => {
  return { ...state, elapsedTime: action.elapsedTime };
};
const setTargetTime = (state, action) => {
  return { ...state, targetTime: action.targetTime };
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
    case "SET_DURATION":
      return setDuration(state, action);
    case "SET_ELAPSEDTIME":
      return setElapsedTime(state, action);
    case "SET_TARGETTIME":
      return setTargetTime(state, action);
    case "TURNOFF_ALARM":
      return turnOffAlarm(state);
    // Default
    default: {
      return state;
    }
  }
};

export default timerReducer;
