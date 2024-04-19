import React from "react";
class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.uname = React.createRef();
    this.password = React.createRef();
    this.state = {
      isSignup: true,
      DisplayName: [],
      Username: [],
      Password: [],
      Email: "",
      password: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.name.current.value !== "" &&
      this.uname.current.value !== "" &&
      this.password.current.value !== ""
    ) {
      this.state.DisplayName.push(this.name.current.value);
      this.setState({ DisplayName: this.state.DisplayName });
      this.state.Username.push(this.uname.current.value);
      this.setState({ Username: this.state.Username });
      this.state.Password.push(this.password.current.value);
      this.setState({ Password: this.state.Password });
      if (this.state.isSignup) {
        this.HandleSwitch();
      }
    } else {
      alert("Inputs are empty");
    }
  };
  HandleSwitch = () => {
    this.setState({ isSignup: false }, () => 
        this.state.isSignup
    );
  };
  changed = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
  Login = (e) => {
    e.preventDefault();
    const existUser = this.state.Username.some(
      (ele) => ele === this.uname.current.value
    );
    const existPass = this.state.Password.some(
      (ele) => ele === this.password.current.value
    );
    if (existUser && existPass) {
      alert(`Welcome ${this.state.DisplayName}`);
    } else {
      alert("wrong credential");
    }
    this.HandleSwitch();
  };
  render() {
    return (
      <>
        <div className="container border border-success mt-5">
          <div className="row">
            <form action="">
              <div className="col">
                {this.state.isSignup && (
                  <label htmlFor="name">
                    <h3>Display Name</h3>
                    <input type="text" name="name" ref={this.name} />
                  </label>
                )}
              </div>
              <div className="col">
                <label htmlFor="email">
                  <h3>Email</h3>
                  <input
                    type="email"
                    name="Email"
                    onChange={this.changed}
                    ref={this.uname}
                  />
                </label>
              </div>
              <div className="col">
                <label htmlFor="password">
                  <h3>Password</h3>
                  {!this.state.isSignup && (
                    <p style={{ color: "#007ac6", fontSize: "10px" }}>
                      Forgot password?
                    </p>
                  )}
                  <input type="password" name="password" ref={this.password} />
                  {this.state.isSignup ? (
                    <p>
                      Password should contain at least 8 characters,
                      <br />
                      including at least 1 letter and 1 number.
                    </p>
                  ) : null}
                </label>
              </div>
              <div className="col mt-3">
                {this.state.isSignup ? (
                  <button
                    type="submit"
                    onClick={this.onSubmit}
                    className="btn btn-primary"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={this.Login}
                    className="btn btn-primary"
                  >
                    Log In
                  </button>
                )}
              </div>
              {this.state.isSignup ? (
                <p>
                  By clicking "Sign UP" you agree to the
                  <span style={{ color: "#007ac6" }}>
                    Term <br />
                    of Condition
                  </span>
                  ,<span style={{ color: "#007ac6" }}>Privecy policy</span> and
                  <span style={{ color: "#007ac6" }}> Cokies policy</span>
                </p>
              ) : null}
            </form>
            <hr />
            <div className="col">
              <p>
                {this.state.isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  type="button"
                  onClick={this.HandleSwitch}
                  className="btn btn-link"
                >
                  {this.state.isSignup ? "Log in" : "Sign up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Ref;
