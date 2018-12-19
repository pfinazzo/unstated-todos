import React, { Component } from 'react';
import { CollectionItem, Button } from 'react-materialize';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      id: 0
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

  render() {
    return (
      <CollectionItem>
        <p>{this.state.content}</p>
        <Button waves="red" onClick={this.buttonClick}>Remove</Button>
      </CollectionItem>
    )
  }
}
