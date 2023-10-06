import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../reducers/budgetReducer";

const rootReducer = combineReducers({
    budgets: budgetReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
