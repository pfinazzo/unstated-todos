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