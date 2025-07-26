import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global-reducer";

const rootReducer = combineReducers({
  account: globalReducer,
});

export default rootReducer;
