import React, { Component } from 'react';
import { CollectionItem, Button } from 'react-materialize';
import './../css/btn.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      id: null
    }
  }

  componentWillMount() {
    const { todo } = this.props;
    const { content } = todo;
    this.setState({ content }, () => {
      this.setState({
        id: this.props.container.state.id
      })
    });
  }

  buttonClick = () => {
    this.props.container.deleteTodo(this.state.content)
  }

  todoWrapStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "10px",
    marginBottom: "10px"
  }

  btnWrapStyle = {
    position: "relative",
    display: "inline-block",
    width: "150px",
    marginTop: "8px"
  }
  contentWrapStyle = {
    display: "flex",
    flexFlow: "row wrap",
    width: "100px",
  }
  paragraphStyle = {
    width: "100%",
    wordWrap: "break-word "
  }

  render() {
    return (
      <CollectionItem>
        <div style={this.todoWrapStyle}>
          <div style={this.contentWrapStyle}>
            <p style={this.paragraphStyle}>{this.state.content}</p>
          </div>
          <div style={this.btnWrapStyle}>
            <Button waves="red" onClick={this.buttonClick}>Remove</Button>
          </div>
        </div>
      </CollectionItem>
    )
  }
}
