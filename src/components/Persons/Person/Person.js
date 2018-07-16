import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from  '../../../hoc/Aux';

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
            <Aux >
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old.</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>

        );
    };
}


export default withClass(Person,classes.Person);