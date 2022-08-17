import { combineReducers } from "redux";
import studentReducer from "./reducers/studentReducer"
const rootReducer = combineReducers({
studentReducer,
})
export default rootReducer;


