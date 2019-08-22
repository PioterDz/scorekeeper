import React from 'react';
import './Player.css';

const Player = (props) => (

    <li className="Player">
        <span className="Player__name">{props.name}</span>
        <span className="Player__score">{props.score}</span>
        <span className="Player__button Plus__button" onClick={() => props.onPlayerScoreChange(props.factor)}>+</span>
        <span className="Player__button Minus__button" onClick={() => props.onPlayerScoreChange(-props.factor)}>-</span>
        <span className="Player__button Remove__button" onClick={() => props.onPlayerRemove()}>Remove</span>
    </li>
);

export default Player;