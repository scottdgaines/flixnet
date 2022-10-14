import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ({ movies }) => {
    console.log(movies)
    const movieCard = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                poster={movie.poster_path}
                key={movie.id}
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