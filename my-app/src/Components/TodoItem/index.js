import React from "react";
import "./style.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <>
     
        <li>{this.props.item.name}</li>
      </>
    );
    
  }
  
}

export default TodoItem;
