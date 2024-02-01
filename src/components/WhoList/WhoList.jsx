import React from 'react'
import css from './WhoList.module.scss'
import img1 from '../../assets/img/phone/6.webp'
import img2 from '../../assets/img/phone/7.png'
import img3 from '../../assets/img/phone/8.png'

const WhoList = () => {
  return (
    <div className='paddings' style={{background: 'white'}}>
        <div className={`innerWidth ${css.container}`}>
            <div className={css.left}>
                <h1>Кому подходит <br /> наша <span style={{color: '#148F2B'}}>рассрочка?</span></h1>
                <ul>
                    <li>Вы живете на территории <br /> Республики Ингушетия</li>
                    <li>Вы достигли возраста в 21 год</li>
                    <li>Вы имеете постоянный доход: <br /> официальный, неофициальный, <br /> пособие или пенсия</li>
                </ul>
                <button className={css.mainCallBtn}>Оформить рассрочку</button>
            </div>
            <div className={css.right}>
                <img className={css.img1} width={700} src={img1} alt="" />
                <img className={css.img2} width={160} src={img2} alt="" />
                <img className={css.img3} src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhoList