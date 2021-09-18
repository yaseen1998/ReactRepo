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
class App extends Component {
  render() {
    return (
      
      <div className="App">
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
        <Formk/>

      </div>
    );
  }
}




export default App;
