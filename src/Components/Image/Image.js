import React from 'react'
import './Image.css'

const Image = ({ poster }) => {
    return (
        <div>
            <img className='display-poster' src={poster}></img>
        </div>
    )
}

export default Image