import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movie.css';

const Movie = ({ id, poster, selectMovie }) => {

    return (
        <NavLink to={`/${id}`} className='movie-card'> 
            <img 
                className='movie-poster' 
                src={poster} 
                onClick={() => selectMovie(id)}
            />
        </NavLink>
    )
}

export default Movie;