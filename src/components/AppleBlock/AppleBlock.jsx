import React, { useEffect, useState } from "react";
import s from "./AppleBlock.module.css";
import iphones from '../.././iphones.json'
import { Apple } from "./Apple";
import { Cart } from "../Cart/Cart";
import logo from "../.././img/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";


export const AppleBlock = () => {
const [isLoading, setIsLoading] = useState(true)
  const list = useSelector((state) => state.cartSlice.list)
  const count = list.reduce((acc, item) => acc + item.count, 0)

  const iphoneArr = iphones.map((item,index) =>  <Apple key={index} {...item}/>)
  const iphoneSkeleton = [... new Array(8)].map((_, index) => <Skeleton key={index}/>)


  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  },[])

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.h2}>Модели Apple в наличии</h2>
        <div className={s.appleBlock}>
      {
        isLoading ? iphoneSkeleton : iphoneArr
      }
      </div>
      </div>
     <div className={s.basketBlock}>
     <Link to='/cart'> <img  className={s.basket} src={logo} alt="basket" /> 
           {
            count > 0 ? <span className={s.basketSpan}>{count}</span> : '' 
           }
    </Link>
     </div>
    </section>
  
  );
};
