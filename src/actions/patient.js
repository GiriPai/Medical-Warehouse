import axios from "axios";
import { GET_PATIENT, CLEAR_PATIENT, PATIENT_ERROR, ADD_REPORT } from "./types";
import { setAlert } from "./alert";

export const getPatient = id => async dispatch => {
  try {
    const res = await axios.get("/api/patients/" + id);

    // console.log(res);
    dispatch({
      type: GET_PATIENT,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATIENT_ERROR,
        payload: {
          status: err.response.statusText,
          msg: err.response.status
        }
      });
    }
  }
};

export const addReport = (id, history, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    // const body = JSON.stringify(formData);
    const res = await axios.post(`/api/reports/${id}`, formData, config);
    console.log(res.data);
    // dispatch({
    //   type: ADD_REPORT,
    //   payload: res.data
    // });
    dispatch(getPatient(id));
    await dispatch(setAlert("Report Added", "success", 5000));

    await history.push(`/patients/${id}`);
    await dispatch(setAlert("Report Added", "success", 5000));
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
    }
  }
};
