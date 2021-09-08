import React, { Component } from 'react';

class Hello extends Component {

    constructor(props){
        super(props)
        this.increase = this.increase.bind(this)
    }

    state = {
        age: 15,
        user: {
            name: "bashir",
            lastName: "shallah"
        },
        socialLinks: [
            "facebook",
            "twitter"
        ]
    }
    decrement =()=>{
        this.setState({age:this.state.age-1})
    }

    increase() {
        this.setState({age:this.state.age+1})
        
    }
    increasebind(){
        this.setState({age:this.state.age+1})
    }
    update =(event)=>{
        this.setState({user:{
            ...this.state.user,
            name:event.target.value
        }
        })
    }
    render(){
        return <div>
            Hello {this.props.name} from class component.
            <p>{this.state.user.name} {this.state.user.lastName} Age: {this.state.age}</p>
            <button onClick = {()=>{this.setState({age:this.state.age+1})}}> increase</button>
            <button onClick = {this.decrement}> decrement</button>
            <button onClick = {this.increasebind.bind()}> increase function</button>
            <button onClick = {this.increase}> increase function bind</button>
            <input type='text' onChange={this.update} />
        </div>
    }

}

export default Hello;