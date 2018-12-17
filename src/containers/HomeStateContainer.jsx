import { Container } from 'unstated';

export default class HomeContainer extends Container {
  state = {
    todos: [
      {
        content: "Hello"
      },
      {
        content: "goodbye"
      }
    ]
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    }, () => {
      console.log('homeContainer todos after add ', this.state.todos);
    })

  }

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, idx) => index !== idx)
    }, () => {
      console.log('homeContainer todos after delete', this.state.todos);
    })
  }
  
}