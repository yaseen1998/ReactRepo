import { Formik, Field, ErrorMessage ,FieldArray} from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
export class Formk extends Component {
  onSubmit = (values) => {
    console.log(values);
  };
  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>

        <label htmlFor=""> name</label>
        <Field name="name" />
        <ErrorMessage name="name" /> <br />
        <hr />

        <label htmlFor=""> email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" /> <br />
        <hr />

        <label htmlFor=""> type</label>
        <br />
        <Field name="type" component="select">
          <option value="">choose : </option>
          <option value="1">one</option>
          <option value="2">two</option>
        </Field> <br />
        <ErrorMessage name="type" /> <br />

        <br />
        <hr />
        <label htmlFor="">active</label>
        <br />
        <Field name="active" type="checkbox" />
        <hr />
        <hr />

        <label htmlFor="">category</label>
        <br />
        <Field name="category" type="radio" value="1" />
        one
        <Field name="category" type="radio" value="2" />
        two <br />
        <hr />

        <label htmlFor=""> facebook</label>
        <Field name="social.facebook"  />
        <ErrorMessage name="social.facebook" /> <br />
        <hr />
        <label htmlFor=""> twiter</label>
        <Field name="social.twiter"  />
        <ErrorMessage name="social.twiter" /> <br />
        <hr />
        <FieldArray
        name = 'friend'
        render = {arrayHelper=>(
            <div>
                {props.values.friend.map((item,index)=>(
                    <div key = {index}>
                    <Field name={`friend.${index}`}/>
                    <button type='button' onClick={()=>arrayHelper.remove(index)}> remove</button>
                    <ErrorMessage name={`friend.${index}`} /> <br />

              </div>
                ))}
             <button type='button' onClick={()=>arrayHelper.push('')}> plus</button>

            </div>
        )
        }
        />

        <hr />
        <hr />
        <button type="submit">send</button>
      </form>
    );
  };
  schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type: Yup.string().required(),
      email: Yup.string().required(),
      category: Yup.string().required(),
      social: Yup.object().shape({
          facebook:Yup.string().required('facebook is required'),
          twiter:Yup.string().required()
      }),
      friend:Yup.array().of(
          Yup.string().required('required')
      )
    });
    return schema;
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: "yaseen",
            email: "",
            type: "",
            category: "",
            active: false,
            social:{
                facebook:'',
                twiter:''
            },
            friend:['ahmad','hassen']
          }}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}
        />
      </div>
    );
  }
}

export default Formk;
