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

        <Field name = 'email'/>
        <hr />

        <button type='submit'>send</button>
        </form>

    }
    render() {
        return (
            <div>
                <Formik 
                initialValues = {{name:"yaseen",email:""}}
                onSubmit = {this.onSubmit}
                render = {this.form}
                />
            </div>
        )
    }
}

export default Formk
