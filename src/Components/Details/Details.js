import React from 'react'
import './Details.css'

const Details = ({ title, rating, releaseDate }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{rating.toFixed(2)} / 10</p>
            <p>{releaseDate}</p>
        </div>
    )
}

export default Details