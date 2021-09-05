import React, { Component } from 'react'

class HornedBeas extends Component {
    render() {
        return (
            <div>
                <h2>title: {this.props.title}</h2>
                <img src = {this.props.image_url} alt = 'HornedBeas' title = {this.props.title}></img>
                <p>description {this.props.description} <strong> it has {this.props.horns} horns</strong></p>
            </div>
        )
    }
}

export default HornedBeas