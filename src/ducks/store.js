import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./budgetReducer";
// IMPORT THE USER REDUCER
import userReducer from "./userReducer";

// ADD THE USER REDUCER TO THE ROOT REDUCER OBJECT THAT WILL BE USED TO CREATE THE REDUX STORE STATE
const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
