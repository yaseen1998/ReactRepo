import { Formik,Field } from 'formik'
import React, { Component } from 'react'

export class Formk extends Component {
    onSubmit=(values)=> {
        console.log(values);
    }
    form = (props)=>{
        return <form onSubmit ={props.handleSubmit}>
            <label htmlFor=""> name</label>
        <Field name = 'name'/>
        <hr />
        <label htmlFor=""> email</label>

        <Field name = 'email' type='email'/>
        <hr />
        <label htmlFor=""> type</label><br />
        <Field name = 'type' component='select'>
            <option value="1">one</option>
            <option value="2">two</option>
            </Field><br />
            <hr />
            <label htmlFor="">active</label><br />
        <Field name = 'active' type='checkbox'/>
        <hr />
        <hr />
            <label htmlFor="">category</label><br />
        <Field name = 'category' type='radio' value='1'/>one
        <Field name = 'category' type='radio' value='2'/>two
        <hr />
        <hr />

        <button type='submit'>send</button>
        </form>

    }
    render() {
        return (
            <div>
                <Formik 
                initialValues = {{name:"yaseen",email:"" ,type:'',category:'',active:false}}
                onSubmit = {this.onSubmit}
                render = {this.form}
                />
            </div>
        )
    }
}

export default Formk
