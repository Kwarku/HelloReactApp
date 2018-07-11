import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
        return (
         <div className="App">
           <h1>Hi, this is my first React App</h1>
           <p> This is some text</p>
           <Person name="Paweł" age="23"/>
           <Person name="Karol" age="12"/>
           <Person name="Krystian" age="35">My hobby is Math </Person>
           <Person name="Michał" age="27"/>
         </div>
    );
  }
}

export default App;
