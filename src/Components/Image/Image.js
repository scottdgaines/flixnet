import React from 'react'
import './Image.css'

const Image = ({ poster }) => {
    return (
        <div>
            <img 
                className='display-poster' 
                src={poster}
                alt="Image from the movie"
            />
        </div>
    )
}

export default Image