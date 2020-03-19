import axios from "axios";
import {
  GET_DOCTORS,
  DOCTOR_ERROR,
  ADD_DOCTOR,
  GET_DOCTOR,
  GET_ACTIVITY,
  ACTIVITY_ERROR
} from "./types";
import { setAlert } from "../actions/alert";
import { loadUser } from "./auth";

export const getDoctors = () => async dispatch => {
  try {
    const res = await axios.get("/api/doctors/ofHospital");
    dispatch({
      type: GET_DOCTORS,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DOCTOR_ERROR,
        payload: {
          status: err.response.statusText,
          msg: err.response.status
        }
      });
    }
  }
};

export const getDoctor = id => async dispatch => {
  try {
    const res = await axios.get("/api/doctors/" + id);
    dispatch({
      type: GET_DOCTOR,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DOCTOR_ERROR,
        payload: {
          status: err.response.statusText,
          msg: err.response.status
        }
      });
    }
  }
};

export const getActivity = id => async dispatch => {
  try {
    const res = await axios.get("/api/doctors/" + id + "/activity");
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: ACTIVITY_ERROR,
        payload: {
          status: err.response.statusText,
          msg: err.response.status
        }
      });
    }
  }
};

export const addDoctor = (history, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    // const body = JSON.stringify(formData);
    const res = await axios.post("/api/doctors", formData, config);
    console.log(res.data);
    dispatch({
      type: ADD_DOCTOR,
      payload: res.data
    });
    dispatch(loadUser());
    await history.push("/doctors");
    await dispatch(setAlert("Doctor Added", "success", 5000));
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
    }
  }
};
