import React from "react";
import axios from "axios";

// import PlayerCard from "./PlayerCard";

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
        <h1>Top 100 Women's Footballers</h1>
        {this.state.players.map(player => {
          return (
            <div key={player.id}>
              {/* <PlayerCard /> */}
              <h2>{player.name}</h2>
              <h3>{player.country}</h3>
              <h4>{player.searches}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
