import axios from "axios";
import { setAlert } from "./alert";
import { UPDATE_PROFILE, CLEAR_PROFILE, PROFILE_ERROR } from "./types";
import { loadUser } from "./auth";

// Update User's profile
export const updateUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  // const body = JSON.stringify(formData);

  console.log(formData);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/patients/update",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => {
          console.log(error);

          dispatch(setAlert(error.error, "danger"));
        });
      }
      dispatch({
        type: PROFILE_ERROR
      });
    }
  }
};
