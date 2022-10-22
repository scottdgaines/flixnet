import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import Filter from '../Filter/Filter'
import DisplayView from '../DisplayView/DisplayView'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: [],
      filteredMovies: [],
      error: ''
    };
  };

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => this.setState({ error: error.message }))
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

  displayFilteredMovie = (titleQuery) => {
    const filteredMovie = this.state.movies.filter(movie => {

      return movie.title.toLowerCase() === titleQuery.toLowerCase()
    })
    
    this.setState({ filteredMovies: filteredMovie })
  }

  render = () => {
    return (
      <main>
        <Nav /> 
         
        { this.state.movies.length ? null : <p className='loading-message'>Loading...</p> }
        { this.state.error ? <p className='error-message'>There was an error {`(${this.state.error})`}! Please try again.</p> : null }
        { this.state.filteredMovies.length ?
          <Route 
            exact path='/' 
            render={() => 
              <div>
                <Filter 
                    displayFilteredMovie={this.displayFilteredMovie}
                /> 
                <Movies   
                  movies={this.state.filteredMovies} 
                  selectMovie={this.selectMovie} 
                /> 
              </div>} 
          /> :
          <Route 
            exact path='/' 
            render={() =>  
              <div>
                <Filter 
                  displayFilteredMovie={this.displayFilteredMovie}
                />
                <Movies   
                  movies={this.state.movies} 
                  selectMovie={this.selectMovie} 
                />
              </div> } 
          /> }
        <Route 
          exact path='/:movieId'
          render={({ match }) => {
            const movieId = parseInt(match.params.movieId)
            return <DisplayView 
              id={movieId} 
              returnHome={this.returnHome}
            /> 
          }}
        />
      </main>
    )
  }

}

export default App