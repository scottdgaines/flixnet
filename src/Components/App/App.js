import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    };
  };

  render() {
    return (
      <main>
        <Nav />
        <Movies movies={this.state.movies} />
      </main>
    )
  }

}

export default App