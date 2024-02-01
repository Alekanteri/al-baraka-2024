import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <div className={css.left}>
            <span style={{ fontSize: "35px" }} className="primaryText">
              Контакты <br />
              <p style={{ fontSize: "18px" }}>Телефон для связи:</p>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "30px",
                }}
                href="tel:8 (938) 007-37-77"
              >
                8 (938) 007-37-77
              </a>{" "}
              <br />
              <p style={{ fontSize: "18px" }}>Ежедневно: 9:00 - 21:00</p> <br />
              <p style={{ fontSize: "18px" }}>Приходите в гости:</p>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/"
                target="_blank"
              >
                ул. Али Горчханова, 12
              </a>{" "}
              <br /> <br />
              <p style={{ fontSize: "18px" }}>Почта для связи:</p>
              <a style={{ color: "#148F2B" }} href="mailto:info@al-baraka.ru">
                info@al-baraka.ru
              </a>
            </span>
          </div>

          <div className={css.right}>
            <div className={css.info}>
              <a>Политика конфиденциальности</a>
            </div>
            <ul className={css.menu}>
              <li>ООО "Атлант"</li>
              <li>ИНН 0608053408</li>
              <li>КПП 060801001</li>
              <li>© 2015-2023 Copyright «Al-Baraka».</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
      <div className={css.bpx}></div>
    </>
  );
};

export default Footer;
