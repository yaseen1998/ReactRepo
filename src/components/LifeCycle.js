import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      time: new Date()
    }
  }
  componentDidMount(){
      setInterval(() => {
         this.setState({
             time:new Date()
         }) 
      }, 1000);
  }
  render() {
    return <div>
        time is {this.state.time.toLocaleTimeString()}
    </div>;
  }
}

export default LifeCycle;
