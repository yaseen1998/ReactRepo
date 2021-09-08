/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class Condition extends Component {
    constructor(props){
        
        super(props)
        this.age=15
    }
    render() {
        return (
            <div>
                {this.age>12?<div>you are older</div>
                :<div>you are smaller</div>}
            </div>
        )
    }
}

export default Condition
