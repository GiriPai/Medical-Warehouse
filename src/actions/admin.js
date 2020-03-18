import axios from "axios";
import { ALL_DETAILS, DETAILS_ERROR } from "./types";
export const getAllDetails = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/admin/home");

    dispatch({
      type: ALL_DETAILS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DETAILS_ERROR,
      payload: { error: "Something went wrong" }
    });
  }
};
