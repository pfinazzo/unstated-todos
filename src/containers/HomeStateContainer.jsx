import { Container } from 'unstated';
import {getTodos, saveTodos} from './../utilities/todoService';

export default class HomeContainer extends Container {
  state = {
    todos: [],
    increment: 0
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    }, () => {
      // push to local storage
      saveTodos(this.state.todos, () => {
        // then pull
        this.pullTodos(() => {
          console.log(this.state.todos);
        });
      });
    })
  }

  incrementAdd = (cb) => {
    this.setState({
      increment: this.state.increment + 1
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

  deleteTodo = (increment) => {
    console.log('delete from store increment', increment);
    var todos = this.state.todos.filter(todo => {
      console.log(todo.increment, increment);
      return todo.increment !== increment;
    })
    console.log ('after delete', todos);
    this.setState({todos})
  }

}