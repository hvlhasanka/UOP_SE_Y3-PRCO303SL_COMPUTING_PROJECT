/**
 * GHD Management System - React Web App
 * SERVICE - Auth Service
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
