import React from "react";
import css from "./HowWork.module.scss";
import time from "../../assets/img/time.svg";
import logo1 from "../../assets/svg/how/1.svg";
import logo2 from "../../assets/svg/how/2.svg";
import logo3 from "../../assets/svg/how/3.svg";
import logo4 from "../../assets/svg/how/4.svg";

const HowWork = () => {
  return (
    <section className={`innerWidth ${css.wrapper}`}>
      <div className={css.availableFast}>
        <img src={time} alt="time" />
        <div className={css.availableFastText}>
          Примерное время рассмотрения заявки на рассрочку для новых клиентов
          <span style={{ fontWeight: "bold" }}> - 45 минут</span>
        </div>
        <h1 className="primaryText">Узнайте, как мы работаем</h1>
        <div className={css.howContent}>
          <div className={css.howItem}>
            <p>
              Наша деятельность основана на <br /> исламском контракте Мурабаха
            </p>
            <img src={logo1} alt="" />
          </div>
          <div className={css.howItem}>
            <p>
              Штрафы, пени, сборы, страховки <br /> и скрытые платежи -
              отсутствуют
            </p>
            <img src={logo2} alt="" />
          </div>
          <div className={css.howItem}>
            <p>
              Мы выкупаем необходимый Вам товар
              <br /> в магазине-партнере и перепродаем в <br /> рассрочку с
              фиксированной наценкой
            </p>
            <img src={logo3} alt="" />
          </div>
          <div className={css.howItem}>
            <p>
              На всех тарифах действует <br /> фиксированный размер наценки <br />
              весь период рассрочки
            </p>
            <img src={logo4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
