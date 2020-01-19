import axios from "axios";
import { GET_DOCTORS, GET_DOCTOR, DOCTOR_ERROR } from "./types";
import { setAuthToken } from "../utils/setAuthToken";
import { setAlert } from "./alert";

export const getDoctors = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:5000/api/doctors");

        dispatch({
            type: GET_DOCTORS,
            payload: res.data
        });
    } catch (err) {
        if (err.response) {
            dispatch({
                type: DOCTOR_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const getDoctor = id => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/doctors/${id}`);

        dispatch({
            type: GET_DOCTOR,
            payload: res.data
        });
    } catch (err) {
        if (err.response) {
            dispatch({
                type: DOCTOR_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const addDoctor = (formData, history) => async dispatch => {
    console.log("here from actions");
    try {
        const res = axios.post("http://localhost:5000/api/doctors", formData);

        history.push("/doctors");
        dispatch(setAlert("Doctor Created", "success"));
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error =>
                    dispatch(setAlert(error.msg, "danger"))
                );
            }
            dispatch({
                type: DOCTOR_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};
