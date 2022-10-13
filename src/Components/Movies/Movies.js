import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ({ movies }) => {
    const movieCard = movies.movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                poster={movie.posterPath}
            />
        )
    })
    return (
        <div>
            {movieCard}
        </div> 
    )
}

export default Movies