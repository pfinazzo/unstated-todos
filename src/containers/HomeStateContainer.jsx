import { Container } from 'unstated';
import {getTodos, saveTodos} from './../utilities/todoService';

export default class HomeContainer extends Container {
  state = {
    todos: [],
    increment: 0
  }
  
  addTodo = (todo) => {
    this.setState((prevState) => {
      return {todos: [...prevState.todos, todo]} // function just to try it out! :D
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
      console.log('pulled todos', this.state.todos);
      cb();
    });
  }

  deleteTodo = (content) => {
    console.log('delete from store content', content);
    var todos = this.state.todos.filter(todo => {
      console.log('match = ', todo.content === content, todo.content, content);
      return todo.content !== content;
    })
    this.setState({todos}, () => {
      console.log ('after delete', this.state.todos);      
    })
  }

}