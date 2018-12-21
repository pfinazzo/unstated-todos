import React, { Component } from 'react';
import CreateTodoForm from '../components/CreateTodoForm';
import HomeStateContainer from './../containers/HomeStateContainer';
import { Subscribe } from 'unstated';
import TodosWrapper from '../components/TodosWrapper';


export default class Home extends Component {

  wrapStyle = {
    display: "flex",
    justifyContent: "center",
  }


  render() {
    return (
      <Subscribe to={[HomeStateContainer]}>
        {container => (
          <div style={this.wrapStyle}>
            <CreateTodoForm container={container} />
            <TodosWrapper container={container} />
          </div>
        )}
      </Subscribe>
    )
  }
}