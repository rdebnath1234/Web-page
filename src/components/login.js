import React from "react";
// Import the Username component
import Username from "./username";
class LoginPage extends React.Component {
  constructor() {
    super();
    // Initialize state and refs in the constructor
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      contributions:  {
        "loginPairs":
        [
          {
            username: "",
            password: "",
            success: false,
          },
          {
            username: "admin",
            password: "admin",
            success: true,
          }
          {
            username: "admin12",
            password: "admin12",
            success: true,
          }
        ]
      }
    };
  }
  // Define the submit function to handle form submission
  submit = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    // Get the username and password from the form
    const username = this.username.current.value;
    const password = this.password.current.value;
    // Check if the username and password are correct
    if (this.state.contributions.loginPairs[1].username === username && 
      this.state.contributions.loginPairs[1].password === password) {
      // If the username and password are correct, set the success state to true
      this.setState({
        success: true,
      });
    } 
      // If the username and password are incorrect, alert the user
    else {
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
          <div className="row  ">
          {this.state.success ? (
          <Username user={this.state.contributions.loginPairs[1].username}></Username>
        ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
