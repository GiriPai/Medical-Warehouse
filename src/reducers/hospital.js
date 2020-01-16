import {
    GET_HOSPITALS,
    ADD_HOSPITAL,
    HOSPITAL_ERROR,
    CLEAR_HOSPITALS
} from "../actions/types";
const initialState = {
    hospitals: [],
    hospital: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_HOSPITALS:
            return {
                ...state,
                hospitals: payload,
                loading: false
            };

        case ADD_HOSPITAL:
            console.log("Here from ADD_HOSPITAL Reducer");
            return {
                ...state,
                hospitals: [...state.hospital, payload],
                hospital: payload,
                loading: false
            };

        case HOSPITAL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        case CLEAR_HOSPITALS:
            return {
                ...state,
                hospitals: [],
                hospital: null,
                loading: false,
                error: {}
            };

        default:
            return state;
    }
}
