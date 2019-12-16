import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = "";
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div className="App"></div>;
  }
}

export default App;
