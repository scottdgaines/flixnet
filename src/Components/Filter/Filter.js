import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            titleQuery: ''
        }
    }

    handleChange = event => {
        this.setState({ titleQuery: event.target.value }, () => this.props.displayFilteredMovie(this.state.titleQuery) )
    }

    submitHandler = event => {
        event.preventDefault()
    }

    render = () => {
        return (
            <form className='search-bar' onSubmit={event => this.submitHandler(event)}>
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

export default Filter