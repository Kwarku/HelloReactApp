import React from 'react';
import classes from './Person.css';
const person = (props) => {
    return(
    <div  className={classes.Person} >
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old.</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    );
}
export default person;