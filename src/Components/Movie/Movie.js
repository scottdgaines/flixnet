import React from 'react';
import './Movie.css';

const Movie = ({ id, poster, selectMovie }) => {

    return (
        <div className='movie-card'>
            <img 
                className='movie-poster' 
                src={poster} 
                onClick={() => selectMovie(id)}
            />
        </div>
    )
}

export default Movie;