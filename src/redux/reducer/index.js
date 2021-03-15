import { combineReducers } from "redux";
import collegeHomeReducer from "./collegeHomeReducer";
import studentsHomeReducer from "./studentsHomeReducer";
import userReducer from './userReducer';


const rootReducer = combineReducers({
    user : userReducer,
    college: collegeHomeReducer,
    student : studentsHomeReducer
})

export default rootReducer;