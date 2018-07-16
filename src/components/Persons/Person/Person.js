import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] msg from constructor');
      }
    
      componentWillMount(){
        console.log('[Person.js] msg from componnetWillMount()');
      }
      componentDidMount(){
        console.log('[Person.js] msg from componentDidMount()');
      }

    render() {
        console.log('[Person.js] msg from redner()');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old.</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </WithClass>

        );
    };
}


export default Person;