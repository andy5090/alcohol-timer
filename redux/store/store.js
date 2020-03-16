import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "../reducers/index";

const logger = createLogger({
  predicate: (getState, action) => action.type === ""
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["messageReducer", "drinkReducer", "userReducer"],
  blacklist: ["timerReducer", "counterReducer"]
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(logger));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
