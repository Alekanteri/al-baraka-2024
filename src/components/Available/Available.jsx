
import React from "react";
import { motion } from "framer-motion";
import css from "./Available.module.scss";
import { fadeIn, textVariant } from "../../utils/motion";
import Modal from "../Modal/Modal";
import img1 from "../../assets/img/materials/1.png";
import img2 from "../../assets/img/materials/2.png";
import img3 from "../../assets/img/materials/3.png";
import img4 from "../../assets/img/materials/4.png";
import img5 from "../../assets/img/materials/5.png";
import img6 from "../../assets/img/materials/6.png";
import img7 from "../../assets/img/materials/7.png";
import img8 from "../../assets/img/materials/8.png";


const Popular = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">
            Товары, доступные для покупки в рассрочку
            </span>
          </div>
        </motion.div>

        <div className={`flexGrid ${css.showContainer}`}>
          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img src={img1} alt="project" />
            <figcaption>
              <b>Телефоны и электроника</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img src={img2} alt="project" />
            <figcaption>
              <b>Мебель и товары <br /> для дома</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img
            
              style={{ marginTop: "6px" }}
              src={img3}
              alt="project"
            />
            <figcaption>
              <b>Напольные <br /> покрытия</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img src={img4} alt="project" />
            <figcaption>
              <b>Строительные <br /> материалы</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img  width={240} height={320} src={img5} alt="project" />
            <figcaption>
              <b>Обои</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={240} height={320} src={img6} alt="project" />
            <figcaption>
              <b>Автозапчасти</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={240} height={320} src={img7} alt="project" />
            <figcaption>
              <b>Шины и диски</b> <br />
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={240} height={320} src={img8} alt="project" />
            <figcaption>
              <b>Другое</b> <br />
            </figcaption>
          </motion.figure>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Popular;
