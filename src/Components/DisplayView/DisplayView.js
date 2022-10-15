import React from 'react'
import Image from '../Image/Image'
import Details from '../Details/Details'
import './DisplayView.css'

const DisplayView = ({ selectedMovie }) => {

    return (
        <section className='display-view-container'>
            <Image poster={selectedMovie[0].poster_path} />
            <Details 
                title={selectedMovie[0].title} 
                rating={selectedMovie[0].average_rating} 
                releaseDate={selectedMovie[0].release_date} 
            />
            <button className='home-button'>Home</button>
        </section>
    )
}

export default DisplayView