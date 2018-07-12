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

  deletePersonHandler = (index) => {
    let tempPersons = this.state.persons;
    tempPersons.splice(index,1)
    this.setState({
      persons:tempPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      margin: '5px',
      cursor: 'pointer',
    }

    const button = (
      <button
        style={style}
        onClick={this.drawAgeHandler.bind(this, 40)}
      >Draw the age </button>
    )

    let personBox = null;

    if (this.state.show) {
      personBox = (
        <div>
        {button}
          {this.state.persons.map((person,index) => {
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
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
