import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import List from "./components/List";
import LifeCycle from "./components/LifeCycle";
import Condition from "./components/Condition";
import Todo from "./components/Todo";
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Todo/>
        {/* Welcome from App.
        <Welcome name="bashir" lastName="shallah">Description</Welcome>
        <Hello name="bashir" />
        <List/>
        <Condition/>
        <hr/>
        <LifeCycle/> */}
      </div>
    );
  }
}




export default App;
