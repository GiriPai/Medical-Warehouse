import {
  GET_PATIENT,
  CLEAR_PATIENT,
  PATIENT_ERROR,
  ADD_REPORT
} from "../actions/types";

const initialState = {
  patients: [],
  patient: {},
  loading: true,
  errors: null
  // records: [],
  // reports: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PATIENT:
    case ADD_REPORT:
      return {
        ...state,
        patient: payload,
        loading: false
      };

    case CLEAR_PATIENT:
      return {
        patients: [],
        patient: {},
        loading: false,
        errors: null
      };

    case PATIENT_ERROR:
      return {
        patients: [],
        patient: {},
        loading: false,
        errors: null
      };

    default:
      return state;
  }
}
