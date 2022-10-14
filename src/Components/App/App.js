import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movieSelected: false
    };
  };

  render() {
    /* If (this.state.movieSelected) {
       return 
    } */

    return (
      <main>
        <Nav />
        { !this.state.movieSelected && <Movies movies={this.state.movies} /> }
        { this.state.movieSelected && <DisplayView /> }
      </main>
    )
  }

}

export default App