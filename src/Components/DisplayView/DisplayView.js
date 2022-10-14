import React from 'react'
import Image from '../Image/Image'
import Details from '../Details/Details'
import './DisplayView.css'

const DisplayView = ({ selectedMovie }) => {
    console.log(selectedMovie)
    return (
        <section className='display-view-container'>
            <Image poster={selectedMovie[0].poster_path} />
            <Details />
            <button className='home-button'>Home</button>
        </section>
    )
}

export default DisplayView