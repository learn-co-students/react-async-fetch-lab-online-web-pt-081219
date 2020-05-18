import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super();
        this.state = {
            astros: []
        }
    }

    displayAstros = () => {
        return this.state.astros.map((a, i) => {
            return(<li key={i}>{a.name}</li>);
        });
    }

    render() {
        return(
            <div>
                <ul>
                    {this.displayAstros()}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        const url = 'http://api.open-notify.org/astros.json'

        fetch(url)
            .then(resp => resp.json())
            .then(json => this.setState({ astros: json.people }))
    }
}

export default App;