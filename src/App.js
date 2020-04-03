import "./App.css";
import CardList from "./components/cardList/CardList";
import React, { Component } from "react";
import SearchBox from "./components/searchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  handelChange = e => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search box" handelChange={this.handelChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
