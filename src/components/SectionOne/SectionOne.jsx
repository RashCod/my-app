import React from "react";
import iphone from "./../.././img/SectionOneImg.svg";
import s from "./SectionOne.module.css";
import { Link } from "react-router-dom";

export const SectionOne = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.sectionBlock}>
          <h1 className={s.h1}>IPHONE 14 PRO</h1>
          <img className={s.iphoneImg} src={iphone} alt="iphone14pro" />
          <Link to="/catalog" className={s.iphoneButton}>
            Выбрать
          </Link>
        </div>
      </div>
    </section>
  );
};
