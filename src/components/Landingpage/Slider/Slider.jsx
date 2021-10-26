import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css"

import classes from "./Slider.module.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Mousewheel } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Mousewheel]);

const Slider = (props) => {


  let imgsrc = "images/burgers";

switch(props.slider){
  case "Burger":
    imgsrc = "images/burgers";
  break;
  case "Sandwich":
    imgsrc = "images/sandwiches";
    break;
  case "Coffe":
    imgsrc = "images/coffe";
    break;
    default:
      imgsrc = "images/burgers";
}


  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
            clickable: true
          }}
          // navigation = {true}
          mousewheel={true}
          onInit = {() =>{console.log('swiper init')
            props.indexhandler(0)
        }}
          onSlideChange={(swiper)=> {console.log('onslide change')
          props.indexhandler(swiper.activeIndex)        
        }}
          onReachEnd = {(swiper) => console.log('reach end',swiper)}
  
        className={classes.swiperSlide}>
        <SwiperSlide>
          <img src= {imgsrc + "/img1.png"} alt =""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgsrc + "/img2.png"} alt =""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgsrc + "/img3.png"} alt =""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgsrc + "/img4.png"} alt =""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default  Slider;