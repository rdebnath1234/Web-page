import React from "react";
import Username from "./username";
class LoginPage extends React.Component {
  constructor() {
    super();
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      username: "",
      password: "",
      success: false,
    };
  }
  submit = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    // Set the state with the values from the form fields 
    // Check if the username and password are correct 
    // If they are correct, set the success state to true 
    // If they are not correct, alert the user
    if (
      this.username.current.value === "admin" &&
      this.password.current.value === "admin"
    ) {
      this.setState({
        success: true,
        username: this.username.current.value,
      });
    } else {
      alert("Invalid username or password");
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <form action="">
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="enter username"
                  ref={this.username}
                  className="form-control"
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  ref={this.password}
                  className="form-control"
                />
              </div>
              <div className="col mt-4">
                <button onClick={this.submit} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {this.state.success ? (
          <Username user={this.state.username}></Username>
        ) : null}
      </>
    );
  }
}

export default LoginPage;
