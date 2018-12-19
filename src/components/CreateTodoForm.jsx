import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class CreateTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    }
  }

  todoFormStyle = {
    border: "solid black 1px",
    height: "500px",
    width: "500px",
    margin: "80px 30px 0px 30px",
    textAlign: "center"
  }
  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  onButtonClick = () => {
    const { addTodo } = this.props.container;
    addTodo(this.state);
  }

  textAreaStyle = {
    height: "400px",
    midWidth: "100%"
  }

  render() {
    return (
      <div style={this.todoFormStyle}>
        <textarea style={this.textAreaStyle} onChange={e => this.handleChange("content", e)} value={this.state.content} type="text" />
        <Button onClick={this.onButtonClick}>Add</Button>
      </div>
    )
  }
}