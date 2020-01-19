import {
    GET_PATIENTS,
    GET_PATIENT,
    ADD_PATIENT,
    DELETE_PATIENT,
    UPDATE_PATIENT,
    PATIENT_ERROR
} from "../actions/types";

const initialState = {
    patients: [],
    patient: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PATIENTS:
            return {
                ...state,
                patients: payload,
                patient: null,
                loading: false
            };

        case GET_PATIENT:
        case DELETE_PATIENT:
            return {
                ...state,
                patient: payload,
                loading: false
            };

        case ADD_PATIENT:
        case UPDATE_PATIENT:
            return {
                ...state,
                patient: payload,
                loading: false
            };

        case PATIENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    }
}
