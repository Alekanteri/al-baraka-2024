import React, { useEffect, useState } from "react";
import css from "./Calculator.module.scss";
import "../../styles/global.scss";

const Calculator = () => {
  const [count, setCount] = useState(50000);
  const [month, setMonth] = useState(3);
  const [firstPayment, setFistPayment] = useState(0);
  const [monthPayment, setMonthPayment] = useState(0);
  const [markUp, setMarkUp] = useState(0);
  const [result, setResult] = useState(0);
  const [discount, setDiscount] = useState(0.02);
  const [countInput, setCountInput] = useState(count);
  const [monthInput, setMonthInput] = useState(month);

  const handleChangeCount = (event) => {
    document.getElementById("inputCountId").value = event.target.value;
    setCountInput(event.target.value);
    setCount(event.target.value);
    calculateAll(event.target.value, month, discount);
  };

  const handleChangeMonth = (event) => {
    document.getElementById("inputMonthId").value = event.target.value;
    setMonthInput(event.target.value);
    setMonth(event.target.value);
    calculateAll(count, event.target.value, discount);
  };

  const handleInputCount = (event) => {
    if (event.key === "Enter") {
      if (event.target.value > 200000) {
        event.target.value = 200000;
        setCount(200000);
      } else if (event.target.value < 8000) {
        event.target.value = 8000;
        setCount(8000);
      }
      setCountInput(event.target.value);
      setCount(event.target.value);
      calculateAll(event.target.value, month, discount);
    }
  };

  const handleInputMonth = (event) => {
    if (event.key === "Enter") {
      if (event.target.value > 12) {
        event.target.value = 12;
        setMonth(12);
      } else if (event.target.value < 2) {
        event.target.value = 2;
        setMonth(2);
      }
      setMonthInput(event.target.value);
      setMonth(event.target.value);
      calculateAll(count, event.target.value, discount);
    }
  };

  const calculateAll = (newCount, newMonth, newDiscount) => {
    let first = Math.round(newCount * 0.3);
    first = first / 100;
    first = Math.ceil(first);
    first = first * 100;
    let markUpPayment = Math.round(
      newDiscount * Number(newMonth) * Number(newCount)
    );
    let totalPayment = Math.round(Number(newCount) + markUpPayment);
    totalPayment = totalPayment / 100;
    totalPayment = Math.ceil(totalPayment);
    totalPayment = totalPayment * 100;
    let sumLeft = totalPayment - first;
    let paymentPerMonth = Math.round(sumLeft / Number(newMonth));

    paymentPerMonth = paymentPerMonth / 100;
    paymentPerMonth = Math.ceil(paymentPerMonth);
    paymentPerMonth = paymentPerMonth * 100;
    totalPayment = paymentPerMonth * Number(newMonth) + first;
    markUpPayment = totalPayment - Number(newCount);

    setFistPayment(first);
    setMarkUp(markUpPayment);
    setResult(totalPayment);
    setMonthPayment(paymentPerMonth);
  };

  useEffect(() => {
    calculateAll(count, month, discount);
  }, []);

  return (
    <div style={{ background: "white", padding: "10px" }}>
      <div className={`innerWidth ${css.btnContainer}`}>
        <div
          className={`${css.discountBtn} ${
            discount == 0.02 ? css.activeBtn : ""
          }`}
          onClick={() => {
            setDiscount(0.02);
            calculateAll(count, month, 0.02);
          }}
        >
          Идеал
        </div>
        <div
          className={`${css.discountBtn} ${
            discount == 0.03 ? css.activeBtn : ""
          }`}
          onClick={() => {
            setDiscount(0.03);
            calculateAll(count, month, 0.03);
          }}
        >
          Стандарт
        </div>
      </div>
      <div className={`innerWidth ${css.calculator}`}>
        <div className={css.calculationAll}>
          <div className={css.calculationContainer}>
            <div className={css.calculatorBody}>
              <div className={css.formContainer}>
                <div className={css.discountBody}>
                  <h3>Рассчитайте свою рассрочку</h3>
                  <div className={css.inputsContainer}>
                    <div style={{ marginTop: "1rem", padding: "10px 0px" }}>
                      <span>Стоимость товара:</span>
                    </div>
                    <div className={css.inventoryChanging}>
                      <label>
                        <input
                          className={css.inputNumber}
                          type="number"
                          id="inputCountId"
                          min={8000}
                          max={200000}
                          defaultValue={countInput}
                          onKeyDown={handleInputCount}
                        />
                        <p>₽</p>
                      </label>
                      <br />
                      <input
                        className={css.inputRange}
                        type="range"
                        min={8000}
                        max={200000}
                        step={100}
                        value={count}
                        onChange={handleChangeCount}
                      />
                    </div>
                    <br />
                    <div style={{ marginTop: "1rem", padding: "10px 0px" }}>
                      <span>Сроки рассрочки:</span>
                    </div>
                    <div className={css.inventoryChanging}>
                      <label>
                        <input
                          className={css.inputNumber}
                          type="number"
                          id="inputMonthId"
                          min={2}
                          max={12}
                          defaultValue={monthInput}
                          onKeyDown={handleInputMonth}
                        />
                        <p>месяца</p>
                      </label>{" "}
                      <input
                        className={css.inputRange}
                        type="range"
                        min={2}
                        max={12}
                        step={1}
                        value={month}
                        onChange={handleChangeMonth}
                      />
                    </div>
                    <br />
                  </div>
                </div>
                <div className={css.calculatorResult}>
                  <div>
                    Общая стоимость
                    <p style={{ fontWeight: 600 }}>{result}</p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#E5E6E7",
                    }}
                  ></div>
                  <div className={css.monthPayment}>
                    <p>Ежемесячный платеж:</p>
                    <span>{monthPayment}</span>
                  </div>
                  <div className={css.firstPayment}>
                    <p>П ервоначальный взнос:</p>
                    <span>{firstPayment}</span>
                  </div>
                  <div className={css.markUp}>
                    <p>Торговая наценка:</p>
                    <span>{markUp}</span>
                  </div>
                  <button className={css.mainCallBtn}>Подать зявку</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
