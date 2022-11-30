import changeTheNumber from "./upDown";
import { combineReducers } from "redux";
import LoginLogout from "./LoginLog";

const rootReducer = combineReducers({
    changeTheNumber,LoginLogout
});
export default rootReducer;