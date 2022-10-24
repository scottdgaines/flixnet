import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import Details from '../Details/Details'
import './DisplayView.css'

class DisplayView extends Component {
    constructor() {
        super()
        this.state = {
            selectedMovie: {},
            error: ''
        }
    }

    componentDidMount = () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState({ selectedMovie: data.movie }))
        .catch(error => this.setState({ error: error.message }))
    }

    render = () => {
        return (
            <section className='display-view-container'>
                <Image poster={this.state.selectedMovie.backdrop_path} />
                { this.state.selectedMovie ? null : <p className="detail-view-loading-message">Loading...</p> }
                { this.state.error ? <p className="detail-view-error-message">There was an error! Please try again.</p> : null }
                <Details 
                    title={this.state.selectedMovie.title} 
                    tagline={this.state.selectedMovie.tagline}
                    genres={this.state.selectedMovie.genres}
                    rating={this.state.selectedMovie.average_rating} 
                    releaseDate={this.state.selectedMovie.release_date} 
                    overview={this.state.selectedMovie.overview}
                    runtime={this.state.selectedMovie.runtime}
                    budget={this.state.selectedMovie.budget}
                    revenue={this.state.selectedMovie.revenue}
                />
                <Link to="/">
                    <button 
                        className='home-button'
                        onClick={this.props.returnHome}>Home
                    </button>
                </Link>
            </section>
        )
    }
}   

export default DisplayView