import React from 'react';
import classes from './switems.module.css'

const SWitems = (props) => {
  let items = null;

  switch (props.type){
      case ('salad') :
          items = <div className={classes.Salad}>
          </div>
          break;
      
      case ('meat') :
          items = <div className={classes.Meat}>
        </div>
          break;

      case ('bacon') :
          items = <div className={classes.tomato}>
        </div>
          break;
      
      case ('cheese') :
          items = <div className ={classes.Cheese}>
        </div>
          break;

        case ('tomato') :
          items = <div className = {classes.Tomato}>
        </div>
          break;

      case ('bread-top') :
              items = <div className = {classes.buntop}>
            </div>
          break;

          case ('bread-bottom') :
          items = <div className = {classes.bunbottom}>
                </div>
          break;

          default :
          items = null;
  }
  return items;


}

export default  SWitems;