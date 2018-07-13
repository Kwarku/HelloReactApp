import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width : 500px)': {
            width: '450px',
        }
    }

    return(
    <div style= {style} className="Person">
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old.</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    );
}

export default Radium(person);