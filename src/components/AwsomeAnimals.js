import React, { Component } from "react";

export default class AwsomeAnimals extends Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  };

  render() {
    const displayAnimals = this.state.animalsByAwesomeness.map(
      (animal, index) => (
        <li>
          Level {index + 1}:{animal}
        </li>
      )
    );
    return (
      <div>
        <ul>{displayAnimals}</ul>
      </div>
    );
  }
}
