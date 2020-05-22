import React from 'react';

class App extends React.Component {
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
    }

    render() {
        return (
            <h1>App Page</h1>
        )
    }
}

export default App;