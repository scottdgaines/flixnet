import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {
    constructor() {
        super()
        this.state = {
            titleQuery: ''
        }
    }

    handleChange = event => {
        console.log("target", event.target.value)
        event.preventDefault()

        this.setState({ titleQuery: event.target.value })
        this.props.displayFilteredMovie(this.state.titleQuery)
    }

    render = () => {
        return (
            <form className='search-bar'>
                <input
                    type='text'
                    placeholder='Search by title...'
                    value={this.state.titleQuery}
                    onChange={event => this.handleChange(event)}
                />
            </form>
        )
    }
}