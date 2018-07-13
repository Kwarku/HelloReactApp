import React, { Component } from 'react';
import classes from './App.css';
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
    const button = (
      <button
        onClick={this.drawAgeHandler.bind(this, 40)}
      >Draw the age </button>
    )

    let personBox = null;
    let buttonClass = '';

    if (this.state.show) {
      personBox = (
        <div>
          {button}
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
      buttonClass = classes.red;
    }

    const assignmentClasses = [];
    if (this.state.persons.length <= 2) {
      assignmentClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignmentClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, this is my first React App</h1>
        <p className={assignmentClasses.join(' ')}> This is some text</p>

        <button
          className={buttonClass}
          onClick={this.toggleUsers}
        >Toggle Users </button>

        {personBox}
      </div>
    );
  }
}

export default App;
