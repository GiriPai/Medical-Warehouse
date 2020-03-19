import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import doctor from "./doctor";
import patient from "./patient";
export default combineReducers({
  alert,
  auth,
  doctor,
  patient
});
