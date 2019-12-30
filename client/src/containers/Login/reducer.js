import * as constants from './constants';

const initialState = {};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGIN.request:
      return {
        ...state,
        fetching: true
      };
    case constants.USER_LOGIN.success:
      return {
        ...state,
        fetching: false,
        userLoginSuccess: action.payload
      };
    case constants.USER_LOGIN.failure:
      return {
        ...state,
        fetching: false,
        userLoginError: action.payload
      };
    default:
      return state;
  }
};

export { userLoginReducer };
