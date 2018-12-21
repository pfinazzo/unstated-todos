import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class CreateTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      id: null
    }
  }

  todoFormStyle = {
    border: "solid black 1px",
    height: "500px",
    width: "500px",
    margin: "80px 30px 0px 30px",
    textAlign: "center"
  }

  componentDidMount() {
    const { id } = this.props;
    this.setState({ id });
  }

  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }
z
  onButtonClick = () => {
    const { addTodo, idAdd } = this.props.container;
    idAdd().then((containerState) => {
      const { id } = containerState;
      this.setState({ id }, () => {
        addTodo(this.state);
      });
    });
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
