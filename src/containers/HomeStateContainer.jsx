import { Container } from 'unstated';
import { getTodos, saveTodos } from './../utilities/todoService';

export default class HomeContainer extends Container {
  state = {
    todos: [],
    increment: 0
  }

  addTodo = (todo) => {
    var found;
    for (var i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].content === todo.content) {
        return found = true;
      }
    }
    if (!found) {
      this.setState((prevState) => {
        return { todos: [...prevState.todos, todo] }
      }, () => {
        saveTodos(this.state.todos, this.pullTodos);
        found = false;
      })
    }
  }

  pullTodos = () => {
    var todos = getTodos();
    this.setState({ todos });
  }

  deleteTodo = (content) => {
    var todos = this.state.todos.filter(todo => {
      return todo.content !== content;
    })
    this.setState({ todos })
  }

}