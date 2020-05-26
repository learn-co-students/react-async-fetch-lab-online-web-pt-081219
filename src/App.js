// create your App component here

import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => 
            this.setState({
                peopleInSpace: data.people
            }))
        }
    

    render(){
        let spaceArray = this.state.peopleInSpace.map(x => x.name).join(", ")
        return(
            <div>Currently in Space: {spaceArray} </div>
        )
    }
}

export default App;