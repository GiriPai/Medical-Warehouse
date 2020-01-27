import axios from "axios";
import {
  GET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_ERROR
} from "../actions/types";
import { setAlert } from "../actions/alert";

// Load Current User's Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/doctors/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
      dispatch(setAlert("Authentication Error", "purple", 4000));
    }
  }
};

export const updateProfile = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    console.log("From action " + formData);
    // const data = await JSON.stringify(formData);
    const res = await axios.put(
      "http://localhost:5000/api/doctors",
      formData,
      config
    );
    await dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    await dispatch(getCurrentProfile());
    await history.push("/home");
    await dispatch(setAlert("Profile Update Successfully", "success", 4000));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch({
        type: UPDATE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
      dispatch(setAlert("Profile Update Error", "purple", 4000));
    }
  }
};
