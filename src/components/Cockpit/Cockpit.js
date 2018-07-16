import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Cockpit.css';

const cockipit = (props) => {
    const assignmentClasses = [];
    
    let btnClass = classes.Button;

    if(props.show){
        btnClass = [classes.Button,classes.red].join(' ');
    }



    if (props.persons.length <= 2) {
      assignmentClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignmentClasses.push(classes.bold);
    }

    return (
       <Aux>
            <h1>{props.title}</h1>
            <p className={assignmentClasses.join(' ')}>
                This is some text</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Toggle Users </button>
       </Aux>

    );

}

export default cockipit;