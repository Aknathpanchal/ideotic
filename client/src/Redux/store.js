import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {  breedReducer } from "./breed/breed.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  breed: breedReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

