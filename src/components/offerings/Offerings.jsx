import React, { useState} from "react";
import classes from "./offerings.module.css";
import OfferingsCard from "./offeringsCard/OfferingsCard";

const Offerings = () => {



  const [input, setinput] = useState('');

  const produts = (title) => {

      const dataduplicator = (id, name, img, cost, discript) =>{
        return {
            id : id,
            name : name,
            img : img,
            cost : cost,
            discript : discript
           }
      }

      let burgerImgSrc = "images/burgers"
      let sandwichImgSrc = "images/sandwiches"
      let coffeImgSrc = "images/coffe"

      let prodinfo = [
        dataduplicator(1,'VEG WHOPPER', burgerImgSrc+"/img3.png", 115 ,'Our Signature veg patty Whopper.'),
        dataduplicator(2,'CHICKEN WHOPPER', burgerImgSrc+"/img2.png",145,'World famous flame grilled chicken whopper.'),
        dataduplicator(3,'CRISPY CHICKEN BURGER', burgerImgSrc+"/img3.png",60,'Our best seller.'),
        dataduplicator(4,'CRISPY VEG BURGER', burgerImgSrc+"/img4.png",85,'Our best seller.'),
        dataduplicator(5,'FIERY CHICKEN BURGER', burgerImgSrc+"/img2.png",170,'To hot to handle.'),
      ];

      switch (title){
        case 'burger':
          prodinfo = [
            dataduplicator(1,'VEG WHOPPER', burgerImgSrc+"/img3.png", 115 ,'Our Signature veg patty Whopper.'),
            dataduplicator(2,'CHICKEN WHOPPER', burgerImgSrc+"/img2.png",145,'World famous flame grilled chicken whopper.'),
            dataduplicator(3,'CRISPY VEG BURGER', burgerImgSrc+"/img3.png",60,'Our best seller.'),
            dataduplicator(4,'CRISPY CHICKEN BURGER', burgerImgSrc+"/img4.png",85,'Our best seller.'),
            dataduplicator(5,'FIERY CHICKEN BURGER', burgerImgSrc+"/img2.png",170,'To hot to handle.'),
                  ]
          break;
          
        case 'sandwich':
          prodinfo = [
            dataduplicator(1,'VEG SANDWICH',sandwichImgSrc+"/img2.png", 115 ,'Our Signature veg patty sandwich.'),
            dataduplicator(2,'CHICKEN SANDWICH',sandwichImgSrc+"/img3.png",145,'World famous flame grilled chicken sandwich.'),
            dataduplicator(3,'CRISPY VEG SANDWICH',sandwichImgSrc+"/img4.png",85,'Our best seller.'),
            dataduplicator(4,'FIERY CHICKEN SANDWICH',sandwichImgSrc+"/img3.png",170,'To hot to handle.'),
          ] 
          break;

          case 'drinks':
            prodinfo = [
              dataduplicator(1,'Blended Coffee',coffeImgSrc+"/img2.png", 69 ,'freshly brewed coffe.'),
              dataduplicator(2,'Mocha Frappuccino',coffeImgSrc+"/img4.png",135,'World famous starbuck trademark.'),
              dataduplicator(3,'India Spice Majesty Blend',coffeImgSrc+"/img3.png",90,'Our best seller in the category.'),
            ] 
            break;  
            
      }


    const cards = ( <div style = {{marginTop :'7rem'}}>
        <div className={classes.title}>{title}</div>
        <div className={classes.container}>
        {prodinfo.map((a) => {
          if(input === ''){
            return (<OfferingsCard details = {a} key = {a.name}/>)
          }else{
           return(a.name.toLowerCase().includes(input.toLowerCase()) ? <OfferingsCard details = {a} key = {a.name}/> : null );
          }
          })}
        </div>
      </div>);
    
    return cards ;
  };


  return (<div className = {classes.page}> 
 {/* <div style = {{margin : '5rem'}}> <input type="text"  placeholder = 'search anything...'  /> </div> */}
 <div className={classes.wrap}>
   <div className={classes.search}>
      <input type="text" className={classes.searchTerm} placeholder="What are you looking for?" 
      onChange = {event => {setinput((event.target.value).trim())}}/>
      <button type="submit" className={classes.searchButton}>
      <span role = "img" aria-label="Search"> 🔍</span> 
     </button>
   </div>
</div>
  <div> {produts('burgers')} </div>
  <div> {produts('sandwich')} </div>
  <div> {produts('drinks')} </div>
  </div>);
};

export default Offerings;
