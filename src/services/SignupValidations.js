import Validations from "./validations";

export default class SignupValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkValidations() {
    let errors = [];

    //email validations
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }

    //password Validations
    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "password should be of 6 characters";
    }

    return errors;
  }

  static errMessagesFromServer(errorCode) {
    switch (errorCode) {
      case "EMAIL_EXISTS":
        return "email already exist";
      case "EMAIL_NOT_FOUND":
        return "email not found";
      case "INVALID_PASSWORD":
        return "invalid password";
      // case "USER_DISABLED":
      //   return "this user has been disbaled";
      default:
        return "unexpected error occured, please try again";
    }
  }
}
