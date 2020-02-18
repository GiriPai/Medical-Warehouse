import {
  GET_DOCTORS,
  GET_DOCTOR,
  DOCTOR_ERROR,
  ADD_DOCTOR,
  GET_ACTIVITY,
  ACTIVITY_ERROR
} from "../actions/types";

const initialState = {
  doctors: [],
  doctor: {},
  loading: true,
  errors: null,
  activity: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: payload,
        loading: false
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activity: payload,
        loading: false
      };

    case ADD_DOCTOR:
      return {
        ...state,
        doctor: payload,
        loading: false
      };
    case GET_DOCTOR:
      return {
        ...state,
        doctor: payload,
        loading: false
      };

    case DOCTOR_ERROR:
      return {
        doctors: [],
        doctor: {},
        activity: null,
        loading: false,
        errors: null
      };

    case ACTIVITY_ERROR:
      return {
        activity: null,
        loading: false
      };
    default:
      return state;
  }
}
