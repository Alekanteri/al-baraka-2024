import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
import Contact from "../Contact/Contact.jsx";


const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <div className={css.leftSide}>
          <h1 style={{textAlign: 'center', fontSize: '2rem'}}>Преимущества</h1>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span style={{fontWeight: '500', fontSize: '20px'}} className="secondaryText">{exp.projects}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <Contact />
      </motion.div>
    </section>
  );
};

export default Experties;
