import React, {Component} from 'react';
import axios from 'axios'
import {concat} from 'lodash'
import SelectBreeds from './SelectBreeds'

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

  onReset = () => {
    this.setState({
      index: null,
      images: []
    })
  };

  onPreviousImage = () => {
    this.setState({
      index: this.state.index <= 0 ? this.state.index : this.state.index - 1
    });
  };

  onNextImage = () => {
    this.setState({
      index: this.state.index >= this.state.images.length - 1 ? this.state.index : this.state.index + 1
    })
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
            <SelectBreeds
              breed={this.state.breed}
              allBreeds={this.state.allBreeds}
              handleChange={this.handleChange}
            />
            <button onClick={this.onBreedRequest}>
              {`Get ${this.state.breed || 'Dog'}!`}
            </button>
          </div>
          <div>
            <button onClick={this.onReset}>
              Restart!
            </button>
            <button onClick={this.onPreviousImage}>
              Previous Image
            </button>
            <button onClick={this.onNextImage}>
              Next Image
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App

