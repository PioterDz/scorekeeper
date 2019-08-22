import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import ChangeFactor from './components/ChangeFactor/ChangeFactor';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      players : [],
      factor: 1
    }
  }

  onScoreUpdate = (playerIndex, factorChoosed) => {
    const { players } = this.state;
    this.setState({
      players: players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + factorChoosed };
        }
        return player;
      })
    })
    console.log(this.state);
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onPlayerRemove = (index) => {
    const remainPlayers = this.state.players.filter((item, idx) => idx !== index);
    this.setState({
      players: [...remainPlayers]
    })
  }

  onChangeFactor = (factorChoosed) => {
    const { factor } = this.state;
    const intFactor = Number(factorChoosed);
    if(isNaN(intFactor)) {
      this.setState({
        factor
      })
    } else {
      this.setState({
        factor: intFactor
      })
    }
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <ChangeFactor onChangeFactor={this.onChangeFactor} />
        <PlayersList players={this.state.players} factor={this.state.factor} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
      </div>
    );
  }
}

export default App;
