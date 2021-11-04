import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css"

import classes from "./Slider.module.css";

import SwiperCore, { EffectCube, Pagination, Mousewheel } from "swiper/core";

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
          onInit = {() =>{props.indexhandler(0)}}
          onSlideChange={(swiper)=> {
          props.indexhandler(swiper.activeIndex)        
        }}
  
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