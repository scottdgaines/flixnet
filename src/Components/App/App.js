import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import DisplayView from '../DisplayView/DisplayView'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: []
    };
  };

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies.movies }))
  }

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.filter(movie => {
      return movie.id === id
    })

    this.setState({ selectedMovie: selectedMovie })
  }

  returnHome = () => {
    this.setState({ selectedMovie: [] })
  }

  render() {
    return (
      <main>
        <Nav />
        { this.state.selectedMovie.length 
          ? <DisplayView id={this.state.selectedMovie[0].id} returnHome={this.returnHome} /> 
          : <Movies movies={this.state.movies} selectMovie={this.selectMovie}/> 
        }
      </main>
    )
  }

}

export default App