import React, { Component } from "react"

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        console.log("CDM")
        fetch('http://api.open-notify.org/astros.json') 
            .then(json => json.json())
            .then(data => this.setState({people: data.people}))
    }

    render() {
        return (
            <div> 
                {this.state.people.map(person => <h1>{person.name}</h1>)}
            </div>
    )}
}

export default App
