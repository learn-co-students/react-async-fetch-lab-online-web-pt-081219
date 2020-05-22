import React, { Component } from "react";

class App extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((data) => data.json())
      .then((data) => this.setState({ people: data }));
  }

  render() {}
}

export default App;
