import { combineReducers } from 'redux';
import loginReducer from './auth/login/loginReducers';

const rootReducer = combineReducers({
  authLogin: loginReducer
});

export default rootReducer;
