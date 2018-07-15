import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.show) {
      personBox = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} />

    }

    return (
      <div className={classes.App}>
        <Cockpit
          show={this.state.show}
          persons={this.state.persons}
          clicked={this.toggleUsers}
        />
        {personBox}
      </div>
    );
  }
}
export default App;