import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Paweł', age: 25 },
      { name: 'Karol', age: 12 },
      { name: 'Krystian', age: 35 },
      { name: 'Michał', age: 27 },
    ],
    show: false,
  };

  dynamicChangeNameMethodHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Paweł', age: 25 },
        { name: event.target.value, age: 12 },
        { name: 'Krystian', age: 35 },
        { name: 'Michał', age: 27 },
      ]
    });
  }

  toggleUsers = () => {
    let isShow = this.state.show;
    this.setState({
      show: !isShow
    })
  }

  drawAgeHandler = (maxAge) => {
    this.setState({
      persons: [
        { name: 'Paweł', age: Math.floor(Math.random() * maxAge) + 1 },
        { name: 'Karol', age: Math.floor(Math.random() * maxAge) + 1 },
        { name: 'Krystian', age: Math.floor(Math.random() * maxAge) + 1 },
        { name: 'Michał', age: Math.floor(Math.random() * maxAge) + 1 },
      ]
    });
  }

  render() {
    //internat CSS code in to button 
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      margin: '5px',
      cursor: 'pointer',
    }

    let personBox = null;

    if (this.state.show) {
      personBox = (
        <div>
          <button
            style={style}
            onClick={this.drawAgeHandler.bind(this, 40)}
          >Draw the age </button>

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            change={this.dynamicChangeNameMethodHandler} />

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          >My hobby is Math
          </Person>

          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, this is my first React App</h1>
        <p> This is some text</p>

        <button
          style={style}
          onClick={this.toggleUsers}
        >Toggle Users </button>

        {personBox}
      </div>
    );
  }
}

export default App;
