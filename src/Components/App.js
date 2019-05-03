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

    onRandomDogRequest = () => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({imageURL: response.data.message})
            })
            .catch(error => {
                console.log(error);
            });
    };

    onBreedRequest = () => {
      axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
          .then(response => {
              this.setState({imageURL: response.data.message})
          })
          .catch(error => {
              console.log(error)
          });
    };

    render() {
        const {imageURL} = this.state;
        console.log(this.state.breed);
        return (
            <div>
                {imageURL && <img src={imageURL} alt='dog'/>}
                <div>
                    <div>
                    <button onClick={this.onRandomDogRequest}>
                        Random!
                    </button>
                    </div>
                    <div>
                    <select value={this.state.breed} onChange={this.handleChange}>
                        <option value="Shiba">Shiba</option>
                        <option value="Norwegian Elkhound">Norwegian Elkhound</option>
                        <option value="Akita"> Akita</option>
                    </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default App

