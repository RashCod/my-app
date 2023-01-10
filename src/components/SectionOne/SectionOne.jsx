import React, { useEffect } from "react";
import iphone from "./../.././img/SectionOneImg.svg";
import iphone1 from "./../.././img/iphone1.jpg";
import iphone2 from "./../.././img/iphone2.webp";
import iphone3 from "./../.././img/iphone3.jpg";

import s from "./SectionOne.module.css";
import { Link } from "react-router-dom";




export const SectionOne = () => {

 useEffect(()=>{
  let indexValue = 0;
  function slideShow(){
    setTimeout(slideShow,3500)
    const img = document.querySelectorAll("#img");
   
    for(let i=0; i<img.length; i++){
        img[i].style.display = "none"
       
    }
  
    indexValue ++
    if(indexValue > img.length){
      indexValue = 1;
    }
    img[indexValue - 1].style.display = "block"
  }
  slideShow()
 
 },[])
 

  return (
    <section id="bg" className={s.section}>
      <div className="container">
        <div className={s.sectionBlock}>
          <h1 className={s.h1}>IPHONE 14 PRO</h1>
          <div className={s.images}>
            <img id="img" className={s.iphoneImg} src={iphone} alt="iphone14pro" />
            <img id="img" className={s.iphoneImg} src={iphone1} alt="iphone14pro" />
            <img id="img" className={s.iphoneImg} src={iphone2} alt="iphone14pro" />
            <img id="img" className={s.iphoneImg} src={iphone3} alt="iphone14pro" />
          </div>
          <Link to="/catalog" className={s.iphoneButton}>
            Выбрать
          </Link>
        </div>
      </div>
    </section>
  );
};


