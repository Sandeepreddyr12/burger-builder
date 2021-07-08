import React, {useState} from 'react';
import { ChromePicker } from 'react-color';

import classes from "./color.module.css"

const Colorpicker = (props) => {
const [color, setcolor] = useState(props.color);
const [showPicker, setshowPicker] = useState(false);



    return (
        <div className = {classes.container}>
            <div 
            onClick = {() => setshowPicker(showPicker => !showPicker)}
            className = {classes.box}
            style = {{backgroundColor : `${color}`}}>
            </div>
           <div className = {classes.picker}>
           {showPicker &&  <div className = {classes.elements}>
            <ChromePicker
            color = {color}
            onChange = {updatedcolor => {setcolor(updatedcolor.hex)
            props.colorpickHandler(updatedcolor.hex)
            }}
            />
            <button onClick = {() => setshowPicker(showPicker => !showPicker)}>&#10060;</button>
            </div>}
           </div>
        </div>
    )
}


export default  Colorpicker;