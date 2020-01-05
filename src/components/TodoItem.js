//using extension es7, we can generate a new component using 'rce' tab
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #xxx dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through': 'none'
        }
    }
        //This is the longer way, we can also use ternary operator
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // } else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }


    render() {
        //creating the cost below is called destructuring, we are pulling out these two things
        const { id, title} = this.props.todo;
        return (
            //we add a checkbox, but we need an event for this to do anything 
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id) } /> 
                {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

//we can also add a style this way, so we just need to reference the variable we set it to.
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem

