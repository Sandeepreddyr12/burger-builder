import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./itemgrid.module.css";
import Button from "../../../components/buttons/Buttons";

const Itemgrid = () => {

  let history = useHistory();

  return (
    <div className={classes.container}>
        <div className = {classes.title}>OUR EXPERIENCE STORE</div>
      <div className={classes.grid}>
        <div className={classes.bimg1}></div>
        <div className={classes.text1}>
          <span>OUR RESTAURANT</span>
          <h3>
            Extra cheese, <br/> extra happiness.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            dolorem perferendis asperiores laborum recusandae! Itaque nisi
            quam tempora!
            </p>
            <Button btntype="success" clicked = {() =>history.push('./offerings')}>buy now</Button>
        </div>
        <div className={classes.cimg1}></div>
        <div className={classes.cimg2}></div>
        <div className={classes.simg1}></div>  
        <div className={classes.text2}>
        <span>GRILLED NEWS</span>
          <h3>
            Sandwich month <br/> is Finally here.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            dolorem perferendis asperiores laborum recusandae! Itaque nisi
            quam tempora!
            </p>
            <Button btntype="success" clicked = {() =>history.push('./offerings')}>buy now</Button>
        </div>
        <div className={classes.fimg1}><div>
          <span>On cultivating a strong culture!</span>
          <Button >Explore Stores</Button>
          </div></div>
      </div>
        <div className = {classes.endCaption}>
        <span>GrilledSouls.com</span>
        <p>“You will become a regular visitor once you’ve tried us.”</p>
        </div>
    </div>
  );
};

export default Itemgrid;
