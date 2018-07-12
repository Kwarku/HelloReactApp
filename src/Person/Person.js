import React from 'react';
import './Person.css';

const person = (props) => {
    return(
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old.</p>
    </div>
    );
}

export default person;