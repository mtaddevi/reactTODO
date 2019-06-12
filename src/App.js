import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodo";
import Header from "./components/layout/header";
import About from "./components/pages/About";
import uuid from "uuid";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    todosCompendium: [
      {
        id: uuid.v4(),
        title: "take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "take out the garbage",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "take out the recycling",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "take out the dumpster",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "take out the waste",
        completed: false
      }
    ]
  };

  //toggle completed items
  markComplete = id => {
    console.log(id);
    this.setState({
      todosCompendium: this.state.todosCompendium.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //deleteTodo
  delTodo = id => {
    // console.log(id);
    this.setState({
      todosCompendium: [
        ...this.state.todosCompendium.filter(
          todosCompendium => todosCompendium.id !== id
        )
      ]
    });
  };

  //addTodo
  addTodo = title => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };

    this.setState({
      todosCompendium: [...this.state.todosCompendium, newTodo]
    });
  };

  render() {
    // this is where we can write react data to view in dev tools for debug (example below)
    // console.log(this.state.todosCompendium);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Todos
                    todosCompendiumItems={this.state.todosCompendium}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  <AddTodos addTodo={this.addTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            {/* this is where we add the react components */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
