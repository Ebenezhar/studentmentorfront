import { combineReducers } from "redux";
import { loaderReducer } from "./loader-reducers";
import { teacherReducer } from "./teacher-reducers";

const reducers = combineReducers({
    loaderReducer: loaderReducer,
    teacherReducer: teacherReducer
})

export default reducers;  