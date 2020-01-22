import React, { Component } from "react";

export default class InterpolateDataTypes extends Component {
  render() {
    const myString = "hi";
    const myUndefined = undefined;
    const objDinosaurs = { name: "Velociraptor", hp: 500 };
    return (
      <div>
        <div>Undefined: {myUndefined}</div>
        <div>
          Object: {objDinosaurs.name} hp: {objDinosaurs.hp}
        </div>
        <div>String : {myString}</div>
      </div>
    );
  }
}
