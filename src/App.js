import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
        return (
         <div className="App">
           <h1>Hi, this is my first React App</h1>
           <p> This is some text</p>
           <Person />
           <Person />
           <Person />
           <Person />
           <Person />
           <Person />
         </div>
    );
  }
}

export default App;
