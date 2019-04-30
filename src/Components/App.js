import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    async componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(function (response) {
                console.log(response)
            })
    }

    render() {
        return (
            <h1>Hi</h1>
        )
    }
}

export default App