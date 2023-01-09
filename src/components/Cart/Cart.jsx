import React from "react";
import iphone from "./../.././img/iPhoneImg/iPhone14promax/Apple iPhone 14 Pro Max Front.jpg";
import s from "./Cart.module.css";
import iphones from "../.././iphones.json";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { list, totalPrice } = useSelector((state) => state.cartSlice);
  const count = list.reduce((acc, item) => acc + item.count, 0);



    return (
    <div className={s.cartBlock}>
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Новое сообщение</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
      <form id="contacts__form">
                    <div class="contacts__form-content">
                        <label class="contacts__form-label">Ваше имя*</label>
                        <input class="contacts__form-input" name="name" type="name" required placeholder="Евгений"/>
                    </div>
                    <div class="contacts__form-content">
                        <label class="contacts__form-label">Контактный номер*</label>
                        <input class="contacts__form-input" name="tel" type="tel" required placeholder="+7 (999) 999-99-99"/>
                    </div>
                    <div class="contacts__form-content">
                        <label class="contacts__form-label">E-mail*</label>
                        <input class="contacts__form-input" name="email" type="email" required placeholder="@"/>
                    </div>
                    <div class="contacts__form-content">
                        <label class="contacts__form-label">Описание</label>
                        <textarea class="contacts__form-input" name="massage" type="text" placeholder="Введите комментарий"></textarea>
                    </div>
                    <div class="contacts__btn-box">
                        <button class="contacts__btn" type="submit">Отправить</button>
                    </div>
                </form>
      </div>
    </div>
  </div>
</div>
      <div className={s.cartBlockCenter}>
        <div className={s.cartBody}>
          <div className={s.h2}>Sopping Apple</div>
          {list.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
        <div className={s.cartInfo}>
          <Link to="/category" className={s.order}>
            Назад
          </Link>
          <div className={s.sum}>{totalPrice} ₽</div>
          <div  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" id="modal" className={s.order && s.orderAnimated}>
            Заказать
          </div>
          {/* <a href="mailto:mail@htmlacademy.ru">Напишите нам</a> */}

        </div>
      </div>
      
    </div>
  );
};
