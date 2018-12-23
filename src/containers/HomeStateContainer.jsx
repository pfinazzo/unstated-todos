import { Container } from 'unstated';
import {getTodos, saveTodos} from './../utilities/todoService';

export default class HomeContainer extends Container {
  state = {
    todos: [],
    id: 0
  }
  
  addTodo = (todo) => {
    let found = false;
    for (let i = 0; i < this.state.todos.length; i++){
      if (this.state.todos[i].content === todo.content){
        return found = true;
      }
    }
    if (!found){
      this.setState((prevState) => {
        return {todos: [...prevState.todos, todo]} 
      }, () => {
        saveTodos(this.state.todos, () => {
          this.pullTodos().then((containerStateTodos) => {
            console.log('pulled from local storage', containerStateTodos);
          });
        });
      })
    }
  }

  idAdd = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        id: this.state.id + 1
      }, () => {
        resolve(this.state);
      })
    })
  }

  pullTodos = () => {
    return new Promise((resolve, reject) => {
      var todos = getTodos();
      this.setState({todos}, () => {
        resolve(this.state);
      });
    })
  }

  deleteTodo = (content) => {
    var todos = this.state.todos.filter(todo => {
      return todo.content !== content;
    })
    this.setState({todos})
  }
  
}