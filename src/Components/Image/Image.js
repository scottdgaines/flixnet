import React from 'react'
import './Image.css'

const Image = ({ poster }) => {
    return (
        <div>
            <img 
                className='display-poster' 
                src={poster}
                alt="Poster from the movie"
            />
        </div>
    )
}

export default Image