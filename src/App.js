import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
// import uuid from 'uuid';
import axios from 'axios';
//we are using uuid to generate ids

//We could you fetch API, but we are using axios which is a http library
//we need to use another lifecycle method
class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //since we are using axios, we don't need to hard code these todo items
  // state = {
  //   todos: [
  //     {
  //       id: uuid.v4(),
  //       title: 'Take out the trash',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Dinner with family',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Meeting with boss',
  //       completed: false
  //     }
  //   ]
  // }

  //mark complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  // render is also called the lifecycle method 
  // this looks like html but is actually jsx, must use className instead of class attribute
  
  //AddTodo
  addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data] }));
    }



    //we don't need this since we are using axios
    // const newTodo={
    //   id: uuid.v4(),
    //   title: title,
    //   complete: false,
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
  

  //Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: 
      [...this.state.todos.filter(todo => todo.id !== id)] }));

  }



  // delTodo = (id) => {
  //   this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
  //     !== id)]});
  // }



  render() {
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  };
}
//we need to add exact path for the first route or it will show everything
//we want about to be another page so we put it in another route
export default App;
