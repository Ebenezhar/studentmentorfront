import { combineReducers } from "redux";
import { accountReducer } from "./account-reducers";
const reducers = combineReducers({
    accountReducer: accountReducer

})

export default reducers;  