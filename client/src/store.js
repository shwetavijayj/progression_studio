import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import rootReducer from './reducer';

let initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
