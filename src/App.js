import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    pesrons:[
      {name:'Paweł', age: 25},
      {name:'Karol', age: 12},
      {name:'Krystian', age: 35},
      {name:'Michał', age: 27},
    ]
  };
  
changeNameHandler = () => {
  // console.log("It's clicked!")
  // DONT'T DO THIS : this.state.pesrons[1].name ='Jakub';

  this.setState({
    pesrons:[
      {name:'Michał', age: 27},
      {name:'Krystian', age: 35},
      {name:'Karol', age: 12},
      {name:'Paweł', age: 25},
    ]
  });
}

reChangeNameHandler = ()=>{
  this.setState({
    pesrons:[
      {name:'Paweł', age: 25},
      {name:'Karol', age: 12},
      {name:'Krystian', age: 35},
      {name:'Michał', age: 27},
    ]
  });
}

  render() {
        return (
         <div className="App">
           <h1>Hi, this is my first React App</h1>
           <p> This is some text</p>
           <button onClick={this.changeNameHandler}>Change Person </button>
           <button onClick={this.reChangeNameHandler}> re change Person </button>
           <Person name={this.state.pesrons[0].name} age={this.state.pesrons[0].age}/>
           <Person name={this.state.pesrons[1].name} age={this.state.pesrons[1].age}/>
           <Person name={this.state.pesrons[2].name} age={this.state.pesrons[2].age}>My hobby is Math </Person>
           <Person name={this.state.pesrons[3].name} age={this.state.pesrons[3].age}/>
         </div>
    );
  }
}

export default App;
