import "./App.css";
import CardList from "./components/cardList/CardList";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App;
