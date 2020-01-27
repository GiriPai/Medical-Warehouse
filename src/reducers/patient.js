import { GET_PATIENT, CLEAR_PATIENT } from "../actions/types";
const initialState = {
    patients: null,
    patient: null,
    loading: true,
    errors: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PATIENT:
            return {
                ...state,
                patient: payload,
                loading: false
            };

        case CLEAR_PATIENT:
            return {
                patients: null,
                patient: null,
                loading: false,
                errors: {}
            };
        default:
            return state;
    }
}
