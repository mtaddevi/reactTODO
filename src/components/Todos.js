import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // how to access props after state changes
    // console.log(this.props.todosCompendiumItems);
    // ...
    // for each todo that we iterator through the list of items and display the titles in the browser
    return this.props.todosCompendiumItems.map(todoIteratorVariable => (
      //   <h3>{todoIteratorVariable.title}</h3>
      <TodoItem
        key={todoIteratorVariable.id}
        todo={todoIteratorVariable}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todosCompendiumItems: PropTypes.array.isRequired
};

export default Todos;
