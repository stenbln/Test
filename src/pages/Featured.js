import React, { Component } from 'react';
import './App.css';
import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'

class Featured extends Component {
  constructor(){
    super();
    this.state={
      todos: TodoStore.getAll()
    }
    this.getTodos = this.getTodos.bind(this);
  }

  componentWillMount(){
    TodoStore.on("change", this.getTodos);
  }
  componentWillUnmount(){
    TodoStore.removeListener("change", this.getTodos);
  }
  getTodos(){
    this.setState({
      todos:TodoStore.getAll(),
    });
  }
  createTodo(){
    TodoActions.createTodo(Date.now());
  }
  reloadTodos(){
    TodoActions.reloadTodos();
  }

  render() {
    var { todos } = this.state;
    const TodoComponents = todos.map((item,index)=>{
      return (<li key={item.id}>{item.name}</li>)
    })

    return (
      <div className="App">
      <button onClick={this.createTodo.bind(this)}>Create</button>
      <button onClick={this.reloadTodos.bind(this)}>Reload</button>

        <ul>
          <h1>This is a featured tab</h1>
          <h1>{this.state.todos[0].id}</h1>
          <ul>
            {TodoComponents}
          </ul>

        </ul>
      </div>
    );
  }
} 

export default Featured;
