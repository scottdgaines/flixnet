import React from 'react'
import './DisplayView.css'

const DisplayView = ({ movies }) => {
    return (
        <section>
            <Image />
            <Details />
            <button>Home</button>
        </section>
    )
}

export default DisplayView