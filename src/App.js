import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    pesrons: [
      { name: 'Paweł', age: 25 },
      { name: 'Karol', age: 12 },
      { name: 'Krystian', age: 35 },
      { name: 'Michał', age: 27 },
    ]
  };

dynamicChangeNameMethodHandler = (event) =>{
    this.setState({
      pesrons:[
        { name: 'Paweł', age: 25 },
        { name: event.target.value, age: 12 },
        { name: 'Krystian', age: 35 },
        { name: 'Michał', age: 27 },
      ]
    });
  }

  drawAgeHandler = (maxAge) => {
    this.setState({
      pesrons: [
        { name: 'Paweł', age: Math.floor(Math.random() * maxAge)+1 },
        { name: 'Karol', age: Math.floor(Math.random() * maxAge)+1 },
        { name: 'Krystian', age: Math.floor(Math.random() * maxAge)+1 },
        { name: 'Michał', age: Math.floor(Math.random() * maxAge)+1 },
      ]
    });
  }

  render() {
    //internat CSS code in to button 
    const style ={
      backgroundColor : 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      margin: '5px',
      cursor: 'pointer',
    }


    return (
      <div className="App">
        <h1>Hi, this is my first React App</h1>
        <p> This is some text</p>

        <button 
        style={style} 
        onClick={this.drawAgeHandler.bind(this,40)}
        >Draw the age </button>

        <Person
          name={this.state.pesrons[0].name}
          age={this.state.pesrons[0].age} />

        <Person
          name={this.state.pesrons[1].name}
          age={this.state.pesrons[1].age}
          change={this.dynamicChangeNameMethodHandler} />

        <Person
          name={this.state.pesrons[2].name}
          age={this.state.pesrons[2].age}
        >My hobby is Math
        </Person>

        <Person
          name={this.state.pesrons[3].name}
          age={this.state.pesrons[3].age} />
      </div>
    );
  }
}

export default App;
