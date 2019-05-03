import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: undefined,
        }
    }

    handleChange = (event) => {
        this.setState({breed: event.target.value});
    };

    onClick = () => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({imageURL: response.data.message})
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const {imageURL} = this.state;
        console.log(this.state.breed);
        return (
            <div>
                {imageURL && <img src={imageURL} alt='dog'/>}
                <div>
                    <button onClick={this.onClick}>
                        Random!
                    </button>
                    <select value={this.state.breed} onChange={this.handleChange}>
                        <option value="Shiba">Shiba</option>
                        <option value="Norwegian Elkhound">Norwegian Elkhound</option>
                        <option value="Akita"> Akita</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default App

