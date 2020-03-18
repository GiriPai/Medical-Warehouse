import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import hospital from "./hospital";
import doctor from "./doctor";
import admin from "./admin";

import patient from "./patient";

export default combineReducers({
  alert,
  auth,
  profile,
  hospital,
  doctor,
  patient,
  admin
});
