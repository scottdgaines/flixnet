import React from 'react'
import './Details.css'

const Details = ({ title, tagline, genres, rating, releaseDate, overview, runtime, budget, revenue }) => {
    return (
        <div>
            <h3 className='detail-title'>{title}</h3>
            { tagline ? <p className='detail-text italic'>{tagline}</p> : null }
            { genres ? <p className='detail-text'>Genre(s): {genres.join(', ')}</p> : null } 
            <p className='detail-text'>Viewers gave it {Number(rating).toFixed(2)} / 10</p>
            <p className='detail-text'>Released in {String(releaseDate).split('-')[0]}</p>
            { overview ? <p className='detail-text'>{overview}</p> : null } 
            { runtime ? <p className='detail-text'>Runtime: {runtime} minutes</p> : null } 
            { budget ? <p className='detail-text'>Budget: ${budget.toLocaleString()}</p> : null }
            { revenue ? <p className='detail-text'>Box Office Revenue: ${revenue.toLocaleString()}</p> : null }
        </div>
    )
}

export default Details