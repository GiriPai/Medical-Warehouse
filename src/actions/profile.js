import axios from "axios";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get Current User's profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:5000/api/admin/me");

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};
