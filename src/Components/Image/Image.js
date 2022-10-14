import React from 'react'
import './Image.css'

const Image = ({ poster }) => {
    return (
        <div className='poster-container'>
            <img className='display-poster' src={poster}></img>
        </div>
    )
}

export default Image