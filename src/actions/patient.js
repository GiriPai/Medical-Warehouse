import axios from "axios";
import { GET_PATIENT, CLEAR_PATIENT, ADD_RECORD } from "./types";
import { setAlert } from "./alert";

export const getPatient = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/patients/${id}`);

    dispatch({
      type: GET_PATIENT,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert("Invalid QR Code", "danger"));
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "purple")));
      }
      dispatch({
        type: CLEAR_PATIENT
      });
    }
  }
};

export const addRecord = (id, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify(formData);

    const res = await axios.post(
      `http://localhost:5000/api/records/${id}`,
      body,
      config
    );
    await dispatch(setAlert("Record Added", "success", 5000));
    await dispatch(getPatient(id));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const addReport = (id, data, history) => async dispatch => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    const body = JSON.stringify(data);

    const res = await axios.post(
      `http://localhost:5000/api/reports/${id}`,
      body
    );
    await dispatch(setAlert("Reports Added", "success", 5000));
    await dispatch(getPatient(id));
    await history.push(`{/patient/${id}}`);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
