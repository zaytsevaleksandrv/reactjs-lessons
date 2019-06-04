import React, { Component, Fragment } from "react";

class Roster extends Component {
  render() {
    const { roster, getRoster } = this.props;
    return (
      <Fragment>
        Roster
        <button onClick={getRoster}>{roster ? "true" : "false"}</button>
      </Fragment>
    );
  }
}

export default Roster;
