import React from 'react'
import './Details.css'

const Details = ({ title, tagline, genres, rating, releaseDate, overview, runtime, budget, revenue }) => {
    {console.log('genre', genres)}
    return (
        <div>
            <h3>{title}</h3>
            <p>{genres}</p>
            { tagline ? <p>{tagline}</p> : null }
            <p>Viewers gave it {rating} / 10</p>
            <p>{releaseDate}</p>
            <p>{overview}</p>
            <p>Runtime: {runtime} minutes</p>
            { budget ? <p>Budget: ${budget}</p> : null }
            { revenue ? <p>Box Office Revenue: ${revenue}</p> : null }
        </div>
    )
}

export default Details