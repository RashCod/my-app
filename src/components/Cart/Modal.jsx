import React from 'react'
import good from "../.././img/good.svg"

export const Modal = () => {
  return (
    <section class="default contacts-bg">
    <div class="container">
        <div class="contacts">
            <div class="contacts__forms">

                <div class="contacts__massage">
                    <img src={good} alt="Сообщение"/>
                    <p class="contacts__info">
                        Ваша заявка принята!
                    </p>
                    <p class="contacts__info-text">
                        В ближайшее время мы с Вами свяжемся!
                    </p>
                </div>

                <h2 class="contacts__title">
                    Оставить заявку
                </h2>
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
</section>
  )
}
