import React, { Component } from "react";

function Task(props) {
  const todo = props.todo;
  const completetesk = props.completetesk;
  return (
    <li>
      {todo.text}{" "}
      <button onClick={completetesk} type="button">
        done
      </button>
    </li>
  );
}
function Creat(props){
    return (
        <div>
            <input
          type=""
          name=""
          value={props.value}
          onChange={props.onChange}
        />
        <button onClick={props.addtask} type="button">
          add task
        </button>
        </div>
    )
}

export class Todo extends Component {
  state = {
    newtask: "",
    todo: [
      { text: "react" },
      { text: "node" },
      { text: "reactbotstrap" },
      { text: "nodels" },
    ],
  };
  completetesk = (index) => {
    console.log(index);
    const todo = [...this.state.todo];
    todo.splice(index, 1);
    this.setState({
      todo,
    });
    this.state.todo.splice(index, 1);
  };
  addtask = () => {
    const todo = [...this.state.todo];
    todo.push({
      text: this.state.newtask,
    });
    this.setState({
      todo,
      newtask: " ",
    });
  };
  update = (e) => {
    this.setState({
      newtask: e.target.value,
    });
  };
  render() {
    return (
      <div>
        {this.state.todo.map((todo, index) => (
          <Task todo={todo} completetesk={() => this.completetesk(index)} />
        ))}
        <Creat value ={this.state.newtask} 
        onChange ={this.update}
         addtask={this.addtask}/>
      </div> 
    );
  }
}

export default Todo;
