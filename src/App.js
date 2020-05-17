import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        
    }

    componentDidMount() {
        console.log("CDM")
        fetch('http://api.open-notify.org/astros.json') 
            .then(json => json.json())
            .then(data => console.log(data))
    }

    render() {
        return (
        <h1>Hello!</h1>
    )}
}

export default App
