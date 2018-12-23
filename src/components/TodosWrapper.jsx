import React, { Component } from 'react';
import Todo from './Todo';
import { Collection } from 'react-materialize';
import './../css/collection.css';
import { saveTodos } from '../utilities/todoService';

export default class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    const { pullTodos } = this.props.container;
    pullTodos().then((stateContainerTodos) => {
      const { todos } = stateContainerTodos;
      this.setState({ todos });
    });
  }

  componentDidUpdate() {
    const { todos } = this.props.container.state;
    if (this.state.todos.length !== todos.length) {
      this.setState({ todos }, () => {
        saveTodos(this.state.todos);
      })
    }
    this.refs.collection.scrollTop = this.refs.collection.scrollHeight;
  }

  render() {
    return (
      <Collection>
        <div ref="collection" className="collection-wrap">
          {this.state.todos.map(todo => {
            return <Todo container={this.props.container} key={todo.id} todo={todo} />
          })}
        </div>
      </Collection>
    )
  }
}