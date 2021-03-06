import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
//We need to go from TodoITem to Todos to App.js. This is to test that markComplete is being called correctly  
//   markComplete = () => {
//     console.log('Hello')
// }

  render () {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete=
      {this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
export default Todos;
