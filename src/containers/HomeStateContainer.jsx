import { Container } from 'unstated';
import { getTodos, saveTodos } from './../utilities/todoService';

export default class HomeContainer extends Container {
  state = {
    todos: []
  }


  addTodo = (todo) => {
    var {content} = todo;
    todo.content = content.trim();
    let found = false;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].content === todo.content) {
        return found = true;
      }
    }
    if (!found) {
      this.setState((prevState) => {
        return { todos: [...prevState.todos, todo] }
      }, () => {
        saveTodos(this.state.todos, () => {
          this.pullTodos().then(containerStateTodos => {
            console.log('pulled from local storage', containerStateTodos);
          })
        });
      })
    }
  }

  idAdd = () => {
    if (this.state.id !== null || this.state.id !== undefined) {
      return new Promise((resolve, reject) => {
        this.setState(prevState => {
          return { id: prevState.id + 1 }
        }, () => {
          resolve(this.state);
        })
      })
    } else {
      this.setState({
        id: 0
      })
    }

  }

  pullTodos = () => {
    return new Promise((resolve, reject) => {
      var todos = getTodos();
      this.setState({ todos }, () => {
        if (this.state.todos.length) {
          if (!this.state.todos[this.state.todos.length - 1].id) {
            this.setState({
              id: 0
            })
          } else {
            this.setState({
              id: this.state.todos[this.state.todos.length - 1].id
            }, () => {
              resolve(this.state);
            })
          }
        } else {
          this.setState({
            id: 0
          }, () => {
            resolve(this.state);
          })
        }
      });
    })
  }

  deleteTodo = (content) => {
    var todos = this.state.todos.filter(todo => {
      return todo.content !== content;
    })
    this.setState({ todos })
  }

}