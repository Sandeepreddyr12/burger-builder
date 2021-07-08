import React, { useState} from "react";
import classes from "./landingpage.module.css";

import {GiCampfire} from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { GiSandwich,GiCoffeeMug } from "react-icons/gi";

import Slider from "./Slider/Slider";
import Buttons from "../buttons/Buttons";
import Colorpicker from "../../colorpicker/Colorpicker";

const Landingpage = () => {
  const [itemName, setitemName] = useState(<span>Burger  <FaHamburger/></span>);
  const [index, setindex] = useState(0);
  const [bgcolor1, setbgcolor1] = useState(null);
  const [h1color, seth1color] = useState("#36d827");
  const [btncolor, setbtncolor] = useState("#008F61");




  const itemChanger = (_, itemname) => {
    // setItem(imagesrc)
    setitemName(itemname);
  };


  const indexnumb = (indnum) =>{
    setindex(indnum)
  };

  let description;
  let bgcolor;
  // let h1color;
  // let h2color;
  // let btncolor;
  // const layoutchanger = (itemName,index) =>{
    // if (itemName == 'Burger' || "Sandwich" ) {
      
    // }
      switch(index){
        case 0 :
          description = <span> Build like a <span style = {{
            fontFamily : "'Russo One', sans-serif",
            color : "red",
          }}>Pro</span> </span> ;
          bgcolor = "#FFF76A";
          break;
        case 1 :
          description = <span>Chilling and <span style ={{fontWeight : "bolder",
        color : "brown",
        fontSize : "1.9rem"
        }} >grilling</span> </span>;
          bgcolor = "#FBC6A4";
          break;
        case 2 :
            description = <span> fresh <span style ={{fontWeight : "bolder",
            color : "green",
            fontSize : "1.9rem"
            }}>veggies</span>  all u need</span>
            bgcolor = "#9FE6A0";
            break;
        case 3 :
            description = <span>feel the heated <span  style ={{fontWeight : "bolder",
            color : "maroon",
            fontSize : "1.9rem"
            }}>Meat</span> </span> 
            bgcolor = "#F7A440";
            break;
      }


  // }


  let itemIcon = <span>Burger  <FaHamburger color = "green"/></span>;

  if(itemName == "Burger"){
    itemIcon = <span>Burger  <FaHamburger color = "green"/></span>
  }else if(itemName == "Sandwich"){
    itemIcon =  <span>Sandwich  <GiSandwich color = "maroon"/></span>
  }else if(itemName == "Coffe"){
    itemIcon = <span>Coffe  <GiCoffeeMug color = "#d62569"/></span>
  }

  return (
    <div className={classes.landingpage}
    style = {{
      backgroundColor : `${bgcolor1 || bgcolor}`, // dynamic styling
    }}>
      <div
        className={classes.clippath}
        //  style = {{background : 'red'}}
      ></div>
      <div className={classes.blocks}>
        <div className={classes.content}>
          <h1>
            Taste the Gril! <GiCampfire/> <br /><span
            style = {{color : `${h1color}`}}
            >Find ur Soul</span>
          </h1>
          <div className = {classes.description}>
            <h2>{itemIcon}  </h2>
            <p>{description}</p>
            <span>
            <Buttons
            style = {{backgroundColor : `${btncolor}`}}
            >order now</Buttons>
            </span>
          </div>
        </div>
        <div className={classes.floatburger}>
          <Slider slider={itemName} 
          indexhandler = {(num)=>indexnumb(num)}
          />
        </div>
      <div className = {classes.logocontainer}>
        <div className = {classes.colorpickers}>
          <Colorpicker
          color = {bgcolor}
          colorpickHandler = {(color) =>setbgcolor1(color) }
          />
          <Colorpicker
           color = {h1color}
           colorpickHandler = {(color) =>seth1color(color) }          
          />
          <Colorpicker
          color = {btncolor}
          colorpickHandler = {(color) => setbtncolor(color) }
          />
        </div>
        <div className={classes.logos}>
          <img
            src="images/burger_logo-removebg-200.png"
            alt=""
            onClick={() => itemChanger("images/burgers", "Burger")}
          />
          <img
            src="images/sandwich-removebg-200.png"
            alt=""
            onClick={() => itemChanger("images/sandwiches","Sandwich")}
          />
          <img
            src="images/coffe-removebg-250.png"
            alt=""
            onClick={() => itemChanger("images/coffe", "Coffe")}
          />
        </div>
        </div>
      </div>
      {/* <div className = {classes.svg}>
                    <img src="images/wave.svg" alt="" />
                     </div> */}
    </div>
  );
};

export default Landingpage;
