import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import profile from "./profile";
import patient from "./patient";

export default combineReducers({
    alert,
    auth,
    profile,
    patient
});
