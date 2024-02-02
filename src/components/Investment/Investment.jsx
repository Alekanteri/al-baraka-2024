import React from "react";
import css from "./Investment.module.scss";
import INV from "../../assets/img/illustration.svg";

const Investment = () => {
  return (
    <div className={`paddings ${css.investment}`}>
      <div className={`innerWidth paddings ${css.container}`}>
        <div className={css.left}>
          <h1>
            ИНВЕСТИЦИИ В ИНГУШЕТИИ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ В КРУПНУЮ ТОРГОВУЮ ГРУППУ
            КОМПАНИЙ{" "}
            <img
              width={200}
              src="https://dzort.ru/assets/img/logo.svg"
              alt=""
            />
          </h1>
          <p>Стать партнером компании DZORT</p>
          <a target="_dzort" href="https://dzort.ru/">
            Подробнее
          </a>
        </div>
        <div className={css.right}>
          <img className={css.invImage} width={500} src={INV} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Investment;
