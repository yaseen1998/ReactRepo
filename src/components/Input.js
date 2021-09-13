import React, { Component } from 'react'

export class Input extends Component {
    state = {
        value:'default'
    }
    setvalue=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.setvalue}/>
            </div>
        )
    }
}

export default Input
