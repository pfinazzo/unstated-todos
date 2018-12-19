import React, { Component } from 'react';
import Todo from './Todo';
import {Collection} from 'react-materialize';
import './../css/collection.css';
import {saveTodos} from './../utilities/todoService';

export default class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.props.container.pullTodos(() => {
      console.log('todos container will mount ', this.props.container.state.todos)
    });
    const {todos} = this.props.container.state;
    this.setState({ todos });
  }

  componentDidUpdate(){
    const {todos} = this.props.container.state;
    if (this.state.todos.length !== todos.length){
      this.setState({todos}, () => {
        console.log('todos container updated  ', this.state.todos);
        saveTodos(this.state.todos);
      })
    }
  }

  // deleteTodo = (increment) => {
  //   console.log('container increment', increment);
  //   this.props.container.deleteTodo(increment, () => {
  //     const {todos} = this.props.container.state;
  //     this.setState({todos}, () => {
  //       console.log('container state after delete', this.state.todos);
  //     })
  //   });
  // }


  render() {
    console.log('rendered', this.state.todos);
    return (
      <Collection>
        {this.state.todos.map(todo => {
          return <Todo container={this.props.container} key={todo.increment} todo={todo}/>
        })}
      </Collection>
    )
  }
}