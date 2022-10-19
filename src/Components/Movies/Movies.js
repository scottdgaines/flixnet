import React from 'react';
import Movie from '../Movie/Movie';
import { NavLink } from 'react-router-dom';
import './Movies.css';

const Movies = ({ movies, selectMovie }) => {
    const movieCard = movies.map(movie => {
        return (
        
                <Movie 
                    id={movie.id}
                    poster={movie.poster_path}
                    key={movie.id}
                    selectMovie={selectMovie}
                />
     
        )
    })
    return (
        <div className='movie-container'>
            {movieCard}
        </div> 
    )
}

export default Movies