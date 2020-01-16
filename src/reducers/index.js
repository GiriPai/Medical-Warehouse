import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import hospital from "./hospital";

export default combineReducers({
    alert,
    auth,
    profile,
    hospital
});
