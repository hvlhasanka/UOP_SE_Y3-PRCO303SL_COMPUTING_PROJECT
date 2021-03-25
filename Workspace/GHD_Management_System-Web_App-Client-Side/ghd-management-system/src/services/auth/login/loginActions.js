import { LOGIN_REQUEST, SUCCESS, FAILURE } from './loginTypes';

export const authenticateUser = (email, password) => {
  const loginCredentials = {
    email: email,
    password: password
  };

  return dispatch => {
    dispatch(loginRequest());
    if(loginCredentials.email === "test" && loginCredentials.password === "123"){
      dispatch(success());
    }
    else{
      dispatch(failure());
    }
  };
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const success = () => {
  return {
    type: SUCCESS,
    payload: true
  };
};

const failure = () => {
  return {
    type: FAILURE,
    payload: false
  };
};
