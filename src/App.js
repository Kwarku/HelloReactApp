import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sadf', name: 'Paweł', age: 25 },
      { id: 'agsd', name: 'Karol', age: 12 },
      { id: 'wthd', name: 'Krystian', age: 35 },
      { id: 'sdjg', name: 'Michał', age: 27 },
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
    function rand() {
      return Math.floor(Math.random() * maxAge) + 1;
    }

    this.setState({
      persons: [
        { id: 'sadf', name: 'Paweł', age: rand() },
        { id: 'agsd', name: 'Karol', age: rand() },
        { id: 'wthd', name: 'Krystian', age: rand() },
        { id: 'sdjg', name: 'Michał', age: rand() },
      ]
    });
  }

  deletePersonHandler = (index) => {
    const tempPersons = [...this.state.persons];

    tempPersons.splice(index, 1)
    this.setState({
      persons: tempPersons
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const changePerson = {
      ...this.state.persons[personIndex]
    };

    changePerson.name = event.target.value;
    const tempPersons = [
      ...this.state.persons
    ];

    tempPersons[personIndex] = changePerson;

    this.setState({
      persons: tempPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'blue',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      margin: '5px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightblue',
        color: 'black'
      }
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
          {/* {button} */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salom',
        color: 'white'

      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, this is my first React App</h1>
          <p className={classes.join(' ')}> This is some text</p>

          <button
            style={style}
            onClick={this.toggleUsers}
          >Toggle Users </button>

          {personBox}
        </div>
      </StyleRoot>
    );
  }
}

//1. To do that i need install packege into node_module.
//    - sudo npm install --save radium
//2. import radium 
//3. export app like radium method argument   <- it works on component class and function
//4. to add @media tag must import {StyleRoot} from Radium package and close whole application into this tag

export default Radium(App);
