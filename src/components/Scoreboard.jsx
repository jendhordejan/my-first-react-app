import React, { Component } from 'react';
import Player from "./Player";

export default class Scoreboard extends Component {
    state = {
        players: [
            { id: 1, name: "Kelley", score: 11 },
            { id: 2, name: "David", score: 14 },
            { id: 3, name: "Rein", score: 4 }
        ]
    };
    // //Normal Mode
    // render() {
    //     const players_copy = [...this.state.players]; //make a copy of the player list so as not to fuck-up the original list. lol
    //     console.log("check copy of players: ", players_copy)
    //     players_copy.sort((currentPlayerScore, nextPlayerScore) => nextPlayerScore.score - currentPlayerScore.score)
    //     /* (currentPlayerScore, nextPlayerScore) = values you want to sort. in this case, in the first round is gonna be Kelly and David*/
    //     console.log("score sorting result ", players_copy) //this should display the players according to their score: David, Kelly, Rein
    //     return (
    //         <div className="scoreboard">
    //             <h1>Scoreboard</h1>
    //             <ul>
    //                 {players_copy.map(player => this.renderPlayer(player))}
    //             </ul>
    //         </div>
    //     )
    // }
    // renderPlayer = player => {
    //     return (
    // <Player
    //     name={player.name}
    //     score={player.score}
    //     key={player.id}
    // />
    //     )
    // }

    //Ninja Mode
    render() {
        const players_copy = [... this.state.players];
        return (
            <div>
                <h1>Scoreboard</h1>
                <ul>
                    {
                        players_copy
                            .sort((currentPlayerScore, nextPlayerScore) => nextPlayerScore.score - currentPlayerScore.score)
                            .map(player => (
                                <Player
                                    name={player.name}
                                    score={player.score}
                                    key={player.id}
                                />
                            ))
                    }
                </ul>
            </div>
        )
    }
}
