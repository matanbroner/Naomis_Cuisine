import {
  LOGIN_FAILED,
  REGISTER_FAILED,
  UPDATE_PROFILE,
  REMOVE_PROFILE
} from '../constants/ActionTypes'

import roles from '../constants/Roles'

const userInitialState = {
  profile: {
    name: 'Matan',
    role: roles.ADMIN
  },
  errors: {}
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        errors: {
          ...state.errors,
          login: action.payload
        }
      };
    case REGISTER_FAILED:
      return {
        ...state,
        errors: {
          ...state.errors,
          register: action.payload
        }
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
            ...action.payload
          },
          errors: {}
      };
    case REMOVE_PROFILE:
      return {
        ...state,
        profile: {},
          errors: {}
      };
    default:
      return state;
  }
}