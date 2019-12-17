import React from "react";
import axios from "axios";

import "./App.css";
import PlayerCard from "./PlayerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      searches: "",
      players: []
    };
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          // name: res.data[0].name
          players: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">Top 100 Women's Footballers</h1>
        {this.state.players.map(player => {
          return (
            <div key={player.id}>
              <PlayerCard
                name={player.name}
                country={player.country}
                searches={player.searches}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
