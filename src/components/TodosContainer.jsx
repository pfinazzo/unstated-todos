import React, { Component } from 'react';
import Todo from './Todo';
import {Collection} from 'react-materialize';
import './../css/collection.css';



export default class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    const {todos} = this.props.container.state;
    this.setState({ todos }, () => console.log(this.state));
  }

  componentDidUpdate(){
    const {todos} = this.props.container.state;
    if (this.state.todos.length !== todos.length){
      this.setState({todos})
    }
  }


  render() {
    return (
      <Collection>
        {this.state.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} index={index}/>
        })}
      </Collection>
    )
  }
}