import React, { Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
  constructor(props){
    super(props);
    console.log('[Persons.js] msg from constructor');
  }

  componentWillMount(){
    console.log('[Persons.js] msg from componnetWillMount()');
  }
  componentDidMount(){
    console.log('[Persons.js] msg from componentDidMount()');
  }
  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Presons.js] msg from componentWillReceiveProps() ' , nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] msg from shouldComponentUpdate() ', nextProps , nextState);
    return nextProps.persons !== this.props.persons ||
    nextProps.clicked !== this.props.clicked || 
    nextProps.changed !== this.props.changed;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE Persons.js] msg from componentWillUpdate()' , nextProps,nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE Persons.js] msg from componentDidUpdate()');
  }

  render(){
    console.log('[Persons.js] msg from render()');
    return(
      this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)} />
      })
    );
  }
}

export default Persons;