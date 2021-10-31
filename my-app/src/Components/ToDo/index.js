import React from "react";
import "./style.css";
import TodoItem from "../TodoItem";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "sleep" },
        { id: 2, name: "work" },
      ],
    };
  }

  newList = (e) => {
    e.preventDefault();
    if (e.target.task.value) {
      let todo = {
        id: this.state.todos.length + 1,
        name: e.target.task.value,
      };
      this.setState({ todos: [...this.state.todos, todo] });
    }
  };

deleteList = (id) => {
 this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)})
}

  render() {
    return (
      <>
        <h1 className="to-do">to Do list: </h1>
        <form onSubmit={this.newList}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
           
          {this.state.todos.map((todo, i) => {
            <TodoItem deleteList ={this.deleteList} />
              return <li>{todo.name}</li>;

          })}
        </ul>
      </>
    );
  }
}

export default ToDo;
