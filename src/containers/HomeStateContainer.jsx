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
          this.pullTodos(() => {
            console.log(this.state.todos);
          });
        });
      })
    }
  }

  idAdd = (cb) => {
    this.setState({
      id: this.state.id + 1
    }, () => {
      cb();
    })
  }

  pullTodos = (cb) => {
    var todos = getTodos();
    this.setState({todos}, () => {
      cb();
    });
  }

  deleteTodo = (content) => {
    var todos = this.state.todos.filter(todo => {
      return todo.content !== content;
    })
    this.setState({todos})
  }

}