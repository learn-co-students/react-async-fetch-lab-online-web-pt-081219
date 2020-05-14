import React, { Component } from 'react'
import Astronaut from './Astronaut'

class App extends Component {

  constructor() {
    super()
    this.state = {
      spacePeople: []
    }
  }

  // with .then()
  // componentDidMount(){
  //   fetch('http://api.open-notify.org/astros.json')
  //   .then(res => res.json())
  //   .then(data => this.setState({ spacePeople: data.people}))
  //   // .then(data => console.log(data))
  // }

  //with async/await
  async componentDidMount() {
    const res = await fetch('http://api.open-notify.org/astros.json')
    const data = await res.json()
    this.setState({
      spacePeople: data.people
    })
  }


render() {
  return (
    <div>
      <h4>People Currently in Space</h4>
      {this.state.spacePeople.map(p => <Astronaut person={p} key={p.name.length}/>)}
      {/* {this.state.spacePeople.map(p => <p key={p.name}>{p.name} on craft {p.craft}</p>)} */}
    </div>
  )
}

}

export default App
