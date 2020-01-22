import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Title extends Component {
  PropTypes = {
    content: PropTypes.string,
    // title: PropTypes.string.isRequired
  };
  render() {
    return (
      <h1>
        {this.props.content}
        <br></br>
        {/* {this.props.title} */}
      </h1>
    );
  }
}
