import React, { Component } from 'react';
import './App.css';
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
    //This is bad way to do this. This is take by referecne
    // let tempPersons = this.state.persons;

    //this take  by compy.
    const tempPersons = [...this.state.persons];

    //i can use this aslo. This is eather copy method
    // let tempPersons = this.state.persons.slice();

    tempPersons.splice(index, 1)
    this.setState({
      persons: tempPersons
    })
  }

  changeNameHandler = (event, id) => {
    //find index of person with id like in argument
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create copy of searhing person
    const changePerson = {
      ...this.state.persons[personIndex]
    };
    //this is the anather method to do this
    // const person = Object.assign({}, this.state.persons[personIndex]);

    //change person name into input value
    changePerson.name = event.target.value;

    //copy of all list 
    const tempPersons = [...this.state.persons];
    
    //change our person into person list 
    tempPersons[personIndex] = changePerson;

    //add list to state
    this.setState({
      persons: tempPersons
    });
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
