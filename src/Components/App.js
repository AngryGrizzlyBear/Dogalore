import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        }
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
             this.setState({imageURL: response.data.message})
            })
            .catch(error => {
                console.log(error);
            });
    }

    imageCall() {
        const { imageURL } = this.state;

         return (
             <img src={imageURL} alt='dog' />
         )
    }

    render() {

        // const { imageURL } = this.state;
        return (
            <button onClick={this.imageCall()}>
                test
            </button>
            //<img src={imageURL} alt='dog' />
        );
    }
}

export default App

