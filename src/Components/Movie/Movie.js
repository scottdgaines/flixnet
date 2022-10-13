import React from 'react';
import './Movie.css';

const Movie = ({ id, poster }) => {
    return (
        <div>
            <img src={poster} />
        </div>
    )
}

export default Movie;