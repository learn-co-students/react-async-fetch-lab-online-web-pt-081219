import React, { Component } from 'react' 

export default class Astronaut extends Component {

  render() {
    return <p>{this.props.person.name} on craft {this.props.person.craft}</p>
  }
}