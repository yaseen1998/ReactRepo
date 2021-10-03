import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import List from "./components/List";
import LifeCycle from "./components/LifeCycle";
import Condition from "./components/Condition";
import Todo from "./components/Todo";
import Input from "./components/Input";
import FormInput from "./components/FormInput";
import Formk from "./components/Formk";
import Formexam from "./components/Formexam"
import Exam301 from "./components/Exam301";

import { withAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  
  render() {
    const { isAuthenticated } = this.props.auth0
    console.log(isAuthenticated);

    return (

      <div className="App">
         <Router>
     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Exam301 />
          </Route>
          <Route path="/Formexam">
            <Formexam />
          </Route>
        </Switch>
      </Router>
    
        {/* <Todo/> */}
        {/* Welcome from App.
        <Welcome name="bashir" lastName="shallah">Description</Welcome> */}
        {/* <Hello name="bashir" /> */}
        {/* <List/>
        <Condition/>
        <hr/>
        <LifeCycle/> */}
        {/* <Input></Input> */}
        {/* <FormInput/> */}
        {/* <Formk/> */}

      </div>
    );
  }
}




export default withAuth0(App);
