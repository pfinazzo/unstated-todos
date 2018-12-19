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
      const {todos} = this.props.container.state;
      this.setState({ todos });
    });
  }

  componentDidUpdate(){
    const {todos} = this.props.container.state;
    if (this.state.todos.length !== todos.length){
      this.setState({todos}, () => {
        saveTodos(this.state.todos);
      })
    }
  }


  render() {
    console.log('rendered', this.state.todos);
    return (
      <Collection>
        {this.state.todos.map((todo, index) => {
          return <Todo container={this.props.container} key={index} todo={todo}/>
        })}
      </Collection>
    )
  }
}