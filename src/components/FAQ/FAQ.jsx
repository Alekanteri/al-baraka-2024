import React from "react";
import styles from "./FAQ.module.scss";
import img1 from "../../assets/img/4.svg";
import img2 from "../../assets/img/5.png";
import img3 from "../../assets/img/6.png";
import img4 from "../../assets/img/7.jpg";
const FAQ = () => {
  return (
    <div className="innerWidth">
      <div className={styles.faqContainer}>
        <h1 className={`primaryText ${styles.faqTitle}`}>Ответы на вопросы</h1>
        <div className={styles.faqItemsBody}>
          <div className={styles.detailsContact}>
            <details>
              <summary>Нужно ли официально работать?</summary>
              <p>
                Нет, официальное трудоустройство не требуется. Вы можете
                работать не официально, получать пенсию или пособие.
              </p>
            </details>
            <img width={200} src={img1} alt="" />
          </div>
          <div className={styles.detailsContact}>
            <details>
              <summary>В чем отличие от кредита?</summary>
              <p>
                Мы не выдаем деньги под проценты (кредит), а оформляем рассрочку
                на конкретный товар. В договорах нашей компании отсутствуют
                такие элементы как штрафы, страховки, пени, сборы, платы за
                погашение, а так же мы обязуемся никогда не перепродавать ваши
                долги коллекторским службам. Ясные и прозрачные условия
                заключения договоров - наше принципиальное отличие
              </p>
            </details>
            <img src={img2} alt="" />
          </div>
          <div className={styles.detailsContact}>
            <details>
              <summary>Обязателен ли поручитель?</summary>
              <p>
                Нет, не обязательно. Вам доступны тарифы как с поручителем, так
                и без.
              </p>
            </details>
            <img src={img3} alt="" />
          </div>
          <div className={styles.detailsContact}>
            <details>
              <summary>Что необходимо для оформления?</summary>
              <p>
                Все зависит от выбранного тарифа. В большинстве случаев
                достаточно иметь только паспорт.
              </p>
            </details>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
