import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_HOSPITALS,
    HOSPITAL_ERROR,
    ADD_HOSPITAL,
    SET_ALERT
} from "./types";

// Get Hospitals
export const getHospitals = () => async dispatch => {
    try {
        const res = await axios.get("/api/hospitals");

        dispatch({
            type: GET_HOSPITALS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: HOSPITAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};

// Create a hospital
export const addHospital = (formData, history) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    try {
        const res = await axios.post(
            "http://localhost:5000/api/hospitals",
            formData
        );

        // dispatch({
        //     type: GET_HOSPITALS,
        //     payload: res.data
        // });
        // getHospitals();

        history.push("/hospitals");
        dispatch(setAlert("Hospital Created", "success"));
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error =>
                    dispatch(setAlert(error.msg, "danger"))
                );
            }
            dispatch({
                type: HOSPITAL_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};

// Delete a hospital
export const deleteHospital = id => async dispatch => {
    if (window.confirm("Are you sure? This cannot be undone!")) {
        try {
            const res = await axios.delete(
                `http://localhost:5000/api/hospitals/${id}`
            );

            // dispatch({
            //     type: DELETE_HOSPITAL,
            //     payload: res.data
            // });
            getHospitals();

            dispatch(setAlert("Hospital deleted permenently ", "success"));
        } catch (err) {
            dispatch({
                type: HOSPITAL_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};
