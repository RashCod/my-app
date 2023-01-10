import React from "react";
import { Link } from "react-router-dom";
import empty from "../../.././img/empty.png";
import s from './Empty.module.css'

export const Empty = () => {
  return (
    <div className={s.empty}>
      <div className="container">
        <div className={s.emptyBlock}>
          <div>
            
            <h2 className={s.h2}> Корзина пустая 😞 </h2>
          </div>
          <div>
            <img src={empty} alt="empty" />
          </div>
          <div>
            <Link to="/catalog" className={s.button}>Вернуться назад</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
