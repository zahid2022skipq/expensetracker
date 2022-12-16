import { combineReducers } from "redux";
import { transactionReducer } from "./transactionReducer";

export const reducer = combineReducers({ reducer: transactionReducer });
