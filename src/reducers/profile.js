import {
  GET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_ERROR
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        profile: null,
        profiles: [],
        loading: false,
        error: {}
      };

    case PROFILE_ERROR:
    case UPDATE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    default:
      return state;
  }
}
