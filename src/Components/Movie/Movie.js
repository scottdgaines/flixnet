import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ id, poster, selectMovie }) => {

    return (
        <Link to={`/${id}`} className='movie-card'> 
            <img 
                className='movie-poster' 
                src={poster} 
                onClick={() => selectMovie(id)}
            />
        </Link>
    )
}

export default Movie;