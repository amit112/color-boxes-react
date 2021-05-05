export class LoginService {
  static validateLoginDetails = ({ username, password }) => {
    const _username = "amit@gmail.com";
    const _password = "Pass@123";

    if (_username === username && _password === password) {
      localStorage.setItem("isUserAlreadyLoggedIn", "Yes");
      return true;
    } else {
      localStorage.setItem("isUserAlreadyLoggedIn", "No");
      return false;
    }
  };

  static isUserAlreadyLoggedIn = () => {
    const value = localStorage.getItem("isUserAlreadyLoggedIn");
    return value;
  };

  static logOutUser = () => {
    localStorage.removeItem("isUserAlreadyLoggedIn");
    window.location.reload();
  };
}
