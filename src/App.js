import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import List from "./components/List";
import Condition from "./components/Condition";
class App extends Component {
  render() {
    return (
      
      <div className="App">
        Welcome from App.
        <Welcome name="bashir" lastName="shallah">Description</Welcome>
        <Hello name="bashir" />
        <List/>
        <Condition/>
      </div>
    );
  }
}




export default App;
