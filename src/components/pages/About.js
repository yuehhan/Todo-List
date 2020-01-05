import React from 'react'

function About() {
    return (
        //react fragments don't show in the dom
        <React.Fragment>
            <h1>About</h1>
            <p>This is a TodoList App</p>
        </React.Fragment>
    )
}


export default About;