import React from 'react';
import classes from './inputs.module.css';

const Inputs = (props) => {

let inputclasses = [classes.inputelement];

if(props.invalid && props.selectvalidate && props.touched ){
    inputclasses.push(classes.invalid)
}

let elementtype = null;

switch (props.inputtype) {
    case ('input'):
        elementtype = <input className = {inputclasses.join(' ')} {...props.config} 
        value = {props.value} onChange = {props.changed} />
        break;
     case ('textarea'):
        elementtype = <textarea className = {inputclasses.join(' ')} {...props.config}
         value = {props.value} onChange = {props.changed}/>;
        break;
        case ('select'):
        elementtype = <select className = {inputclasses.join(' ')} 
         onChange = {props.changed}>
             {props.config.options.map(option => (<option value = {option.value} key = {option.value} >{option.label}</option>)
        )}
         </select>;
        break;
        default :
        elementtype = <input className = {inputclasses.join(' ')} {...props.config} 
        value = {props.value} onChange = {props.changed} />
}

    return (
        <div className = {classes.input}>
            <label className = {classes.label}>{props.label}</label>
            {elementtype}
        </div>
    )
}


export default Inputs;