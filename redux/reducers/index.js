// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import timerReducer from "./timerReducer";
import counterReducer from "./counterReducer";
import messageReducer from "./messageReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  timerReducer: timerReducer,
  counterReducer: counterReducer,
  messageReducer: messageReducer
});

// Exports
export default rootReducer;
