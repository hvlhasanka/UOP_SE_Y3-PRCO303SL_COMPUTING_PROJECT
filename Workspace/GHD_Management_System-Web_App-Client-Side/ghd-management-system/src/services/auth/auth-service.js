/**
 * GHD Management System - React Web App
 * SERVICE | END USERS - ADMINISTRATOR & OPERATOR | Auth Service
 */
import authAxiosInstance from "./auth-axios";

class AuthService {

  validateLoginCredentials(enteredEmailAddress, enteredPassword){
    let loginCredentials = {
      emailAddress: enteredEmailAddress,
      password: enteredPassword
    }
    return authAxiosInstance.post("/authenticate", loginCredentials);
  }

}

export default new AuthService();
