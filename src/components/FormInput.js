import React, { Component } from 'react'

export class FormInput extends Component {
    state = {
        value:'default',
        select:'2',
        check:true,
        radio:''
    }
    setvalue=(event)=>{
        const name = event.target.name
        const type = event.target.type
        let value = ''
        if(type === 'checkbox'){
            value=event.target.checked
        }
        else{
            value=event.target.value
        }
        this.setState({
            [name]:value
        })
    }
    
    render() {
        return (
            <div>
                <input name='value' type="text" value={this.state.value} onChange={this.setvalue}/>
                <hr/>
                <textarea name='value' value={this.state.value} onChange={this.setvalue}/>
                <hr/>
                <select name='select' value={this.state.select} onChange={this.setvalue}>
                    <option value="1">one</option>
                    <option value="2">two</option>
                </select>
                <hr/>

                <label htmlFor=""> checkbox
                <input name='check' type="checkbox" checked={this.state.check} onChange={this.setvalue}/>


                </label>
                <hr/>
                <div  onChange={this.setvalue}>
                <input name='radio' type="radio" value='1' checked={this.state.radio=== '1' }/>one
               
                <input name='radio' type="radio" value='2' checked={this.state.radio=== '2' }/>two
                </div>

                
            </div>
        )
    }
}

export default FormInput
