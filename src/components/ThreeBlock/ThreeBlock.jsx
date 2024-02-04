import styles from "./ThreeBlock.module.scss";
import icon1 from "../../assets/svg/1.svg";
import icon2 from "../../assets/svg/2.svg";
import icon3 from "../../assets/svg/3.svg";
import Modal from "../Modal/Modal";
import React from "react";

const ThreeBlock = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <section className={` ${styles.threeBlockContainer}`}>
      <h1 className="primaryText">
        3 простых шага к получению желаемого товара
      </h1>
      <div className={styles.threeBlockItemsList}>
        <div className={styles.ThreeBlockItem}>
          <span className={styles.threeBlockItemTitle}>
            Заполните короткую анкету
          </span>
          <p className={styles.threeBlockItemDescription}>
            Займет не более 2-х минут
          </p>
          <button onClick={handleOpenModal} className={styles.mainCallBtn}>
            Заполните анкету
          </button>
          <img src={icon1} alt="" />
        </div>
        <div className={styles.ThreeBlockItem}>
          <span className={styles.threeBlockItemTitle}>
            Узнайте решение за 15 минут не выходя из дома
          </span>
          <p className={styles.threeBlockItemDescription}>
            Наш специалист сразу свяжется с вами <br />и расскажет решение
          </p>
          <img src={icon2} alt="" />
        </div>
        <div className={styles.ThreeBlockItem}>
          <span className={styles.threeBlockItemTitle}>
            Получите желаемый товар в рассрочку
          </span>
          <p className={styles.threeBlockItemDescription}>
            В магазине лично или закажите доставку на дом
          </p>
          <img src={icon3} alt="" />
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
};

export default ThreeBlock;
