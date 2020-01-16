import axios from "axios";
import { setAlert } from "./alert";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_PROFILE,
    CLEAR_HOSPITALS
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("http://localhost:5000/api/admin/me");

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(
            "http://localhost:5000/api/auth/admin/login",
            body,
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error =>
                    dispatch(setAlert(error.msg, "danger"))
                );
            }
            dispatch({
                type: LOGIN_FAIL
            });
        }
    }
};

// logout / clear profile

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: CLEAR_HOSPITALS });
    dispatch({ type: LOGOUT });
};
