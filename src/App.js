// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(json => this.setState({data: json.people}))
  };


  render() {
    return (
      <div>
        {this.state.data.map((person, index) => <p key={index}>{person.name}</p>)}
      </div>
    );
    }
  }

export default App;