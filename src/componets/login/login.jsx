import React from "react";
import { withRouter } from "react-router";
import { LoginService } from "../../services/loginService";
import "./login.css";


export class Login extends React.Component {
  state = {
    loginDetails: {
      username: "",
      password: "",
    },
  };

  handleInputValueChange = (value, inputName) => {
    const loginDetails = { ...this.state.loginDetails };
    loginDetails[inputName] = value;
    this.setState({ loginDetails });
  };

  handleLogin = () => {
    console.log(this.state.loginDetails);
    if (LoginService.validateLoginDetails(this.state.loginDetails)) {
      this.props.history.push("/boxes");
    } else {
      alert("Invalid Login Creadentials");
    }
  };

  render() {
    const {
      loginDetails: { username, password },
    } = this.state;
    return (
      <div className="main-container">
        <form className="login-form" onSubmit={this.handleLogin}>
          <div>
            <div>
              <input
                className="login-form-input"
                autocomplete="off"
                type="text"
                placeholder="Email address"
                onChange={(event) =>
                  this.handleInputValueChange(
                    event?.currentTarget?.value,
                    "username"
                  )
                }
                value={username}
              />
            </div>
            <div>
              <input
                className="login-form-input"
                autocomplete="off"
                type="password"
                placeholder="Password"
                onChange={(event) =>
                  this.handleInputValueChange(
                    event?.currentTarget?.value,
                    "password"
                  )
                }
                value={password}
              />
            </div>

            <button className="login-btn" type="submit" value="Submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
