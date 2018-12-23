import React, { Component } from 'react';
import { Button } from 'react-materialize';
import './../css/text-area.css';

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
    textAlign: "center",
    borderRadius: "25px"
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
    midWidth: "100%",
    borderRadius: "25px",
    padding: "20px",
    border: "solid grey 1px",
    resize: "none"
  }

  buttonDivStyle={
    marginTop: "20px"
  }

  render() {
    return (
      <div style={this.todoFormStyle}>
        <textarea style={this.textAreaStyle} onChange={e => this.handleChange("content", e)} value={this.state.content} type="text" />
        <div style={this.buttonDivStyle}>
          <Button onClick={this.onButtonClick}>Add</Button>
        </div>
      </div>
    )
  }
}
