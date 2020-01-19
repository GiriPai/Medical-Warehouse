import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_PATIENTS,
    GET_PATIENT,
    PATIENT_ERROR,
    ADD_PATIENT,
    UPDATE_PATIENT,
    DELETE_PATIENT
} from "../actions/types";

export const getPatients = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:5000/api/patients");

        dispatch({
            type: GET_PATIENTS,
            payload: res.data
        });
    } catch (err) {
        if (err.response) {
            dispatch({
                type: PATIENT_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const getPatient = id => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/patients/${id}`);

        dispatch({
            type: GET_PATIENT,
            payload: res.data
        });
    } catch (err) {
        if (err.response) {
            dispatch({
                type: PATIENT_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const addPatient = (data, history) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const res = axios.post(
            "http://localhost:5000/api/patients",
            data,
            config
        );
        // dispatch({
        //     type: ADD_PATIENT,
        //     payload: res.data
        // });
        await dispatch(getPatients());
        await history.push("/patients");

        await dispatch(setAlert("Patient Created", "primary"));
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error =>
                    dispatch(setAlert(error.msg, "danger"))
                );
            }
            dispatch({
                type: PATIENT_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const updatePatient = (id, data) => async dispatch => {
    console.log(data);
    data = JSON.stringify(data);
    console.log(data);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const res = axios.put(
            `http://localhost:5000/api/patients/${id}`,
            data,
            config
        );
        // dispatch({
        //     type: UPDATE_PATIENT,
        //     payload: res.data
        // });
        await dispatch(getPatient(id));
        // await history.push("/patients");

        await dispatch(setAlert("Patient Updated", "primary"));
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error =>
                    dispatch(setAlert(error.msg, "danger"))
                );
            }
            dispatch({
                type: PATIENT_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

export const deletePatient = id => async dispatch => {
    try {
        const res = await axios.delete(
            `http://localhost:5000/api/patients/${id}`
        );

        await dispatch({
            type: DELETE_PATIENT,
            payload: res.data
        });
        await dispatch(getPatients());
        await dispatch(setAlert("Deletion Successful", "primary"));
    } catch (err) {
        if (err.response) {
            dispatch({
                type: PATIENT_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
        dispatch(setAlert("Data Not Deleted", "danger"));
    }
};
