import React from "react";
import "./style.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
     
        <li>{this.props.item.name}
        <h3 onClick={() => this.props.deleteList(this.props.todo.id)}>X</h3>
        </li>
      </>
    );
    
  }
  
}

export default TodoItem;
