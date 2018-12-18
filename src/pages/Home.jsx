import React, { Component } from 'react';
import TodosContainer from '../components/TodosContainer';
import CreateTodoForm from '../components/CreateTodoForm';
import HomeStateContainer from './../containers/HomeStateContainer';
import { Subscribe } from 'unstated';


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
            <TodosContainer container={container} />
          </div>
        )}
      </Subscribe>
    )
  }
}