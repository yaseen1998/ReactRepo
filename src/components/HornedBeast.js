import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props){
        super(props);

        this.state={
                statelike:0,
        }
    }
    raiselike=()=>{
        console.log(this.state.statelike)
        this.setState({
            statelike:this.state.statelike+1
            
        })
    }
    render() {
        return (
            <div>
            {/* <h2>title: {this.props.title}</h2> */}
          <span>
            <img onClick={this.raiselike} src = {this.props.image_url} alt = 'HornedBeas'  style={{width: "300px"}}></img>
            </span>
            <span> number of like  🧡🧡: {this.state.statelike} </span>
            {/* <p>description {this.props.description} <strong> it has {this.props.horns} horns</strong></p> */}
        </div>
        )
    }
}

export default HornedBeast
