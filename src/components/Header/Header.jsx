import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import svgLogo from "../../assets/img/logo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { BiLogoVk } from "react-icons/bi";

const Header = () => {
  const headerShadow = useHeaderShadow();

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleChangeMenu = () => {
    setIsOpen(!isOpen);
  };

  window.onresize = () => {
    setWidth(window.innerWidth);
    if (width <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={css.bpx}></div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        className={`bg-primary ${css.wrapper}`}
        viewport={{ once: true, amount: 0.25 }}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`${css.navbar}`}>
          <div className={css.name}>
            <a style={{ textDecoration: "none", color: "#0D2F3F" }} href="/">
              <div className={css.alBarakaContainer}>
                <img width={60} src={svgLogo} alt="logo" />
                <span className={css.alBarakaText}>
                  Al-Baraka <br />{" "}
                  <p style={{ fontSize: "10px" }}>РАССРОЧКА БЕЗ БАНКА</p>
                </span>
              </div>
            </a>
          </div>
          <ul className={`${css.links}`}>
            <li>
              <a href="#experties">ПОДАТЬ ЗАЯВКУ</a>
            </li>
            <li>
              <a href="#work">О НАС</a>
            </li>
            <li>
              <a href="#portfolio">ПОПУЛЯРНЫЕ</a>
            </li>
            <li>
              <a href="#people">ПАРТНЕРЫ</a>
            </li>
            <li className={css.links}>
              <a style={{ fontWeight: "500" }} href="tel:+7 (938) 007-37-77">
                +7 (938) 007-37-77
              </a>
            </li>
            <li className={css.svgHeader}>
              <a
                target="_blank"
                href="https://wa.me/79380073777?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BF%D1%80%D0%BE%20%D1%80%D0%B0%D1%81%D1%81%D1%80%D0%BE%D1%87%D0%BA%D1%83!"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
            <li className={css.svgHeader}>
              <a target="_blank" href="https://t.me/al_baraka_ing">
                <FaTelegram size={20} />
              </a>
            </li>
            <li className={css.svgHeader}>
              <a target="_blank" href="https://vk.com/al.baraka">
                <BiLogoVk size={20} />
              </a>
            </li>
          </ul>
          <div className={css.menuIcon}>
            <BiMenuAltRight
              style={{ cursor: "pointer" }}
              size={25}
              onClick={handleChangeMenu}
            />
          </div>
        </div>
        <div className={`${css.dropDownMenu} ${isOpen ? css.open : ""}`}>
          <ul className={`${css.links}`}>
            <li>
              <a href="#experties">ПОДАТЬ ЗАЯВКУ</a>
            </li>
            <li>
              <a href="#work">О НАС</a>
            </li>
            <li>
              <a href="#portfolio">ПОПУЛЯРНЫЕ</a>
            </li>
            <li>
              <a href="#people">ПАРТНЕРЫ</a>
            </li>
            <li className={`${css.links}`}>
              <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a>
            </li>
            <div style={{display: 'flex', gap: '1rem'}}>
              <li className={css.svgHeader}>
                <a
                  target="_blank"
                  href="https://wa.me/79380073777?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BF%D1%80%D0%BE%20%D1%80%D0%B0%D1%81%D1%81%D1%80%D0%BE%D1%87%D0%BA%D1%83!"
                >
                  <FaWhatsapp size={20} />
                </a>
              </li>
              <li className={css.svgHeader}>
                <a target="_blank" href="https://t.me/al_baraka_ing">
                  <FaTelegram size={20} />
                </a>
              </li>
              <li className={css.svgHeader}>
                <a target="_blank" href="https://vk.com/al.baraka">
                  <BiLogoVk size={20} />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
