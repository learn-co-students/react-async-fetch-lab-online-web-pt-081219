// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {
        astronauts: []
    }

    componentDidMount() {
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.updateAstronaut(data)
        })
    }

    updateAstronaut(data) {
        console.log(data.people)
        data.people.map( astronaut => {
            console.log(astronaut.name)
            return this.setState = (prevState => ({
                astronauts:  [
                    ...prevState.astronauts,
                    {
                    name: astronaut.name
                    }
                ]
            }))
        })
        console.log(this.state)
    }

    renderAstronauts() {
        this.state.astronauts.map(astronaut => {
            return <li>{ astronaut.name }</li>
        }) 
    }

    render() {
        return (
        <div>
            <ul>
                { this.renderAstronauts() }
            </ul>
        </div>
        )
    }
}

export default App;