import React, { Component } from "react";
class Username extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col border border-success">
              <strong>Welcome {this.props.user}</strong>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Username;
