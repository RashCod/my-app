import React from "react";
import s from "./AppleBlock.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCount, setList } from "../../Redux/slices/cartSlice";
export const Apple = ({ count, id, image, name, price }) => {
  const dispatch = useDispatch();

  const featchList = () => {
  const  Appl = {
      id,
      image,
      name,
      price,
      count,
    };
    dispatch(setList(Appl));
  };

  return (
    <div class={s.productWrap}>
      <div class={s.productItem}>
        <div className={s.imgBlock}>
          <img src={image} />
        </div>
        <div class={s.productButtons}>
          <a
            onClick={featchList}
            href="#"
            class={s.button}
          >
            В корзину
          </a>
        </div>
      </div>
      <div class={s.productTitle}>
        <a href="#">{name}</a>
        <b class={s.productPrice}>₽ {price}</b>
      </div>
    </div>
  );
};
