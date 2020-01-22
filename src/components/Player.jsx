import React, { Component } from 'react';
import PropTypes from "prop-types"
//This is my card...display it using the list(Scoreboard.jsx)

export default class Player extends Component {
    propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        key: PropTypes.number
    }
    render() {
        return (
            <li className="player">
                <p className="id">{this.props.id}</p>
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score}</p>
            </li>
        )
    }
}
