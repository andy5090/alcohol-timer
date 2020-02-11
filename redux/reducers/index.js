// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import timerReducer from "./timerReducer";
import counterReducer from "./counterReducer";
import messageReducer from "./messageReducer";
import drinkReducer from "./drinkReducer";
import userReducer from "./userReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  timerReducer: timerReducer,
  counterReducer: counterReducer,
  messageReducer: messageReducer,
  drinkReducer: drinkReducer,
  userReducer: userReducer
});

// Exports
export default rootReducer;
