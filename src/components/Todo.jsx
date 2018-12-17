import React, {Component} from 'react';
import {CollectionItem} from 'react-materialize';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
  }

  componentDidMount(){
    const {todo} = this.props;
    console.log(this.props)
    const {content} = todo;
    this.setState({content})
  }

  render(){
    return(
      <CollectionItem>{this.state.content}</CollectionItem>
    )
  }
}
