import React from 'react'
import Image from '../Image/Image'
import Details from '../Details/Details'
import './DisplayView.css'

const DisplayView = ({ selectedMovie }) => {
    return (
        <section>
            <Image />
            <Details />
            <button>Home</button>
        </section>
    )
}

export default DisplayView