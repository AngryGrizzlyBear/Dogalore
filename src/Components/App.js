import React, {Component} from 'react';
import axios from 'axios'
import { concat } from 'lodash'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: null,
      images: [],
      allBreeds: [],
    }
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list')
      .then(response => {
        this.setState({allBreeds: response.data.message})
      })
      .catch(error => {
        console.log(error);
      });
  };


  handleChange = (event) => {
    this.setState({breed: event.target.value});
  };

  onRandomDogRequest = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({
          index: this.state.images.length,
          images: concat(this.state.images, response.data.message)
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  onBreedRequest = () => {
    axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
      .then(response => {
        this.setState({
          index: this.state.images.length,
          images: concat(this.state.images, response.data.message)
        })
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {
    const image = this.state.images[this.state.index];
    return (
      <div>
        {image && <img src={image} alt='dog'/>}
        <div>
          <div>
            <button onClick={this.onRandomDogRequest}>
              Random!
            </button>
          </div>
          <div>
            <select value={this.state.breed} onChange={this.handleChange}>
              <option value="empty">Select a breed!</option>
              {this.state.allBreeds.map(breed => (<option key={breed} value={breed}>{breed}</option>))}
            </select>
            <button onClick={this.onBreedRequest}>
              {`Get ${this.state.breed || 'Dog'}!`}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App

