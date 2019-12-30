import { combineReducers } from 'redux';

// import reducers here
import { userLoginReducer } from './containers/Login/reducer';

const rootReducer = combineReducers({
  userLogin: userLoginReducer //which is imported above and so on
});

export default rootReducer;
