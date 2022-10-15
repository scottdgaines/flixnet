import React, { Component } from 'react'
import Image from '../Image/Image'
import Details from '../Details/Details'
import './DisplayView.css'

// const DisplayView = ({ selectedMovie, returnHome }) => {
class DisplayView extends Component {
    constructor() {
        super();
        this.state = {
            selectedMovie: {},
            error: ''
        }
    }

    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState({ selectedMovie: data.movie }))
        .catch(error => this.setState({ error: error.message }))
    }

    render() {
        return (
            <section className='display-view-container'>
                { this.state.selectedMovie ? null : <p>Loading...</p> }
                { this.state.error ? <p>There was an error! Please try again.</p> : null }
                <Image poster={this.state.selectedMovie.poster_path} />
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
                <button 
                    className='home-button'
                    onClick={this.props.returnHome}
                >Home</button>
            </section>
        )
    }
}   

export default DisplayView