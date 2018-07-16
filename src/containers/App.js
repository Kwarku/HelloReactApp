import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from  '../hoc/WithClass';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] msg from constructor');

    this.state = {
      persons: [
        { id: 'sadf', name: 'Paweł', age: 25 },
        { id: 'agsd', name: 'Karol', age: 12 },
        { id: 'wthd', name: 'Krystian', age: 35 },
        { id: 'sdjg', name: 'Michał', age: 27 },
      ],
      show: false,
    };
  }

  componentWillMount(){
    console.log('[App.js] msg from componnetWillMount()');
  }
  componentDidMount(){
    console.log('[App.js] msg from componentDidMount()');
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] msg from shouldComponentUpdate() ', nextProps , nextState);
  //   return nextState.persons !== this.state.persons || 
  //   nextState.show !== this.state.show;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] msg from componentWillUpdate()' , nextProps,nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] msg from componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     { id: 'sadf', name: 'Paweł', age: 25 },
  //     { id: 'agsd', name: 'Karol', age: 12 },
  //     { id: 'wthd', name: 'Krystian', age: 35 },
  //     { id: 'sdjg', name: 'Michał', age: 27 },
  //   ],
  //   show: false,
  // };
  toggleUsers = () => {
    let isShow = this.state.show;
    this.setState({
      show: !isShow
    })
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
console.log('[App.js] msg from render()');

    let personBox = null;

    if (this.state.show) {
      personBox = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} />

    }

    return (
      <WithClass classes={classes.App}>
      <button onClick={() => { this.setState({show:true});}} >Show persons</button>
        <Cockpit
          title={this.props.title}
          show={this.state.show}
          persons={this.state.persons}
          clicked={this.toggleUsers}
        />
        {personBox}
      </WithClass>
    );
  }
}
export default App;