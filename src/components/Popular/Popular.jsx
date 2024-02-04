import React from "react";
import { motion } from "framer-motion";
import css from "./Popular.module.scss";
import { fadeIn, textVariant } from "../../utils/motion";
import Modal from "../Modal/Modal";
import Phone1 from "../../assets/img/phone/1.png";
import Phone2 from "../../assets/img/phone/2.png";
import Phone3 from "../../assets/img/phone/3.png";
import Phone4 from "../../assets/img/phone/4.png";
import Phone5 from "../../assets/img/phone/5.png";
import Phone6 from "../../assets/img/phone/9.png";
import Phone7 from "../../assets/img/phone/10.png";

const Popular = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <h1 className="primaryText">
              Популярные товары, которые берут в рассрочку
            </h1>
          </div>
        </motion.div>

        <div className={`flexGrid ${css.showContainer}`}>
          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone1} alt="project" />
            <figcaption>
              <b>
                APPLE IPHONE 15 <br /> 256GB
              </b>{" "}
              <br />
              <p className={css.price}>104 399 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone2} alt="project" />
            <figcaption>
              <b>
                Apple iPhone 15 PRO <br /> MAX 256GB
              </b>{" "}
              <br />
              <p className={css.price}>159 299 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img
              width={200}
              style={{ marginTop: "6px" }}
              src={Phone3}
              alt="project"
            />
            <figcaption>
              <b>
                Apple iPhone 13 <br /> 128GB
              </b>{" "}
              <br />
              <p className={css.price}>71 999 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone4} alt="project" />
            <figcaption>
              <b>
                Apple iPhone 14 <br /> Pro Max 256GB
              </b>{" "}
              <br />
              <p className={css.price}>146 699 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={280} height={320} src={Phone6} alt="project" />
            <figcaption>
              <b>
                SAMSUNG GALAXY <br /> S23 ULTRA 12/256
              </b>{" "}
              <br />
              <p className={css.price}>90 990 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={280} height={320} src={Phone7} alt="project" />
            <figcaption>
              <b>XIAOMI REDMI NOTE 12 PRO 8/256 </b> <br />
              <p className={css.price}>23 990 ₽ ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={240} height={320} src={Phone5} alt="project" />
            <figcaption>
              <b>
                APPLE MACBOOK <br /> AIR 2022 M2 8/256
              </b>{" "}
              <br />
              <p className={css.price}>114 990 ₽ ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={240} height={320} src={Phone5} alt="project" />
            <figcaption>
              <b>
                APPLE MACBOOK PRO <br /> 2022 M2 8/512
              </b>{" "}
              <br />
              <p className={css.price}>143 990 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={handleOpenModal}
              >
                <span style={{ display: "flex", gap: "5px" }}>
                  Оформить <span>рассрочку</span>
                </span>
              </button>
            </figcaption>
          </motion.figure>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Popular;
