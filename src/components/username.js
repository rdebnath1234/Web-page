import React, { Component } from "react";
class Username extends Component {
  render() {
    return (
      <>
            <div className="col border border-success text-center">
              <strong>Welcome {this.props.user}</strong>
            </div>
      </>
    );
  }
}

export default Username;
