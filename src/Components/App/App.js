import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    };
  };

  render() {
    return (
      <main>
        <p>Hello</p>
        <Movies movies={this.state.movies} />
      </main>
    )
  }

}

export default App