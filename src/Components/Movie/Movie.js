import React from 'react';
import './Movie.css';

const Movie = ({ id, poster }) => {
    return (
        <div className='movie-card'>
            <img 
                className='movie-poster' 
                src={poster} 
            />
        </div>
    )
}

export default Movie;