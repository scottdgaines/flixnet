import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import movieData from '../../movieData'
import DisplayView from '../DisplayView/DisplayView'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: []
    };
  };

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.filter(movie => {
      return movie.id === id
    })

    this.setState({ selectedMovie: selectedMovie })
  }

  render() {
    
    return (
      <main>
        <Nav />
        { this.state.selectedMovie.length 
          ? <DisplayView selectedMovie={this.state.selectedMovie} /> 
          : <Movies movies={this.state.movies} selectMovie={this.selectMovie}/> 
        }
      </main>
    )
  }

}

export default App