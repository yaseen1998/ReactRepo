import React, { Component } from 'react'

export class Input extends Component {
    state = {
        value:'default',
        select:'2',
        check:true,
        radio:''
    }
    setvalue=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    selectvalue=(event)=>{
        this.setState({
            select:event.target.value
        })
    }
    checkvalue=(event)=>{
        this.setState({
            check:event.target.checked
        })
    }
    radiovalue=(event)=>{
        this.setState({
            radio:event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.setvalue}/>
                <hr/>
                <textarea  value={this.state.value} onChange={this.setvalue}/>
                <hr/>
                <select value={this.state.select} onChange={this.selectvalue}>
                    <option value="1">one</option>
                    <option value="2">two</option>
                </select>
                <hr/>

                <label htmlFor=""> checkbox
                <input type="checkbox" checked={this.state.check} onChange={this.checkvalue}/>


                </label>
                <hr/>
                <div onChange={this.radiovalue}>
                <input type="radio" value='1' checked={this.state.radio=== '1' }/>one
               
                <input type="radio" value='2' checked={this.state.radio=== '2' }/>two
                </div>

                
            </div>
        )
    }
}

export default Input
