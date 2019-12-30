import * as constants from './constants';
const CALL_API = Symbol('PROGRESSION_STUDIO');

const userLogin = userDetails => ({
  [CALL_API]: {
    url: 'http://localhost:3001/users/login',
    method: 'post',
    data: userDetails
  },
  types: constants.USER_LOGIN
});

export { userLogin };
