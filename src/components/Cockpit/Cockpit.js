import React from 'react';
import classes from './Cockpit.css';

const cockipit = (props) => {
    const assignmentClasses = [];
    
    let btnClass = '';

    if(props.show){
        btnClass = classes.red;
    }



    if (props.persons.length <= 2) {
      assignmentClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignmentClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignmentClasses.join(' ')}>
                This is some text</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Toggle Users </button>
        </div>

    );

}

export default cockipit;