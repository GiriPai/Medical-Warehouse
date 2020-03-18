import { ALL_DETAILS, DETAILS_ERROR } from "../actions/types";
const initialState = {
  allDetails: {},
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_DETAILS:
      return {
        ...state,
        allDetails: payload,
        loading: false
      };

    case DETAILS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    //  case CLEAR_HOSPITALS:
    //    return {
    //      ...state,
    //      hospitals: [],
    //      hospital: null,
    //      loading: false,
    //      error: {}
    //    };

    default:
      return state;
  }
}
