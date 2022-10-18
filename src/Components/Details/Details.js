import React from 'react'
import './Details.css'

const Details = ({ title, tagline, genres, rating, releaseDate, overview, runtime, budget, revenue }) => {
    return (
        <div>
            <h3 className='detail-title'>{title}</h3>
            { tagline ? <p className='detail-text italic'>{tagline}</p> : null }
            <p className='detail-text'>Genre(s): {genres}</p>
            <p className='detail-text'>Viewers gave it {rating} / 10</p>
            <p className='detail-text'>{releaseDate}</p>
            <p className='detail-text'>{overview}</p>
            <p className='detail-text'>Runtime: {runtime} minutes</p>
            { budget ? <p className='detail-text'>Budget: ${budget}</p> : null }
            { revenue ? <p className='detail-text'>Box Office Revenue: ${revenue}</p> : null }
        </div>
    )
}

export default Details