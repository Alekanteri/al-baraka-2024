import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import css from "./Contact.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NumberInput from "./NumberInput.jsx";

const notify = () => toast.success("Запрос Отправлен");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  maxHeight: "600px",
  width: "600px",
  overflowY: "scroll",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Contact = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    axios
      .post("https://658f5b4f2871a9866e7a6d97.mockapi.io/test", data)
      .then((response) => {
        console.log(response.data);
      });
    reset();
  };
  const activeClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <motion.div variants={textVariant(0.5)} className={css.rightSide}>
      <h1>Оставьте заявку, мы свяжемся с вами для получения рассрочки</h1>
      <span>Выберите удобный для вас вид связи</span>
      <ul className={css.formContact}>
        <li
          onClick={() => activeClick(0)}
          className={activeIndex === 0 ? css.active : ""}
        >
          <FiPhoneCall /> <p>Звонок</p>
        </li>
        <li
          onClick={() => activeClick(1)}
          className={activeIndex === 1 ? `${css.active} background: red` : ""}
          style={activeIndex === 1 ? { background: "#2FACEA" } : null}
        >
          <FaTelegram
            color="#2FACEA"
            style={activeIndex === 1 ? { color: "white" } : null}
            size={23}
          />
          <p>Telegram</p>
        </li>
        <li
          onClick={() => activeClick(2)}
          className={activeIndex === 2 ? `${css.active}` : ""}
          style={activeIndex === 2 ? { background: "#3BC14A" } : null}
        >
          <IoLogoWhatsapp
            color="#3BC14A"
            style={activeIndex === 2 ? { color: "white" } : null}
            size={23}
          />
          <p>WhatsApp</p>
        </li>
      </ul>
      <div>
        <div className={css.consultFormContent}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Минимум 4 символов",
                },
              })}
              placeholder="Введите Ваше ФИО"
            />{" "}
            <br />
            <div style={{ color: "#148F2B", textAlign: "center" }}>
              {errors?.firstName && (
                <p>{errors.firstName?.message || "Error"}</p>
              )}
            </div>
            <br />
            <NumberInput/>
            <div style={{ color: "red" }}>
              {}
              {errors?.numberPhone && (
                <p>{errors.numberPhone.message || "Error"}</p>
              )}
            </div>
            <br />
            <input
              onClick={notify}
              className={css.submitBtn}
              type="submit"
              disabled={!isValid}
              value="Получить рассрочку"
            />{" "}
            <br />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                Я согласен с{" "}
                <p
                  onClick={handleOpen}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {" "}
                  политикой конфиденциальности
                </p>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Оставляя данные на сайте, Вы соглашаетесь с Политикой
            конфиденциальности и защиты информации. Защита данных Администрация
            сайта al-baraka.ru (далее Сайт) не может передать или раскрыть
            информацию, предоставленную пользователем (далее Пользователь) при
            регистрации и использовании функций сайта третьим лицам, кроме
            случаев, описанных законодательством страны, на территории которой
            пользователь ведет свою деятельность. Получение персональной
            информации Для коммуникации на сайте пользователь обязан внести
            некоторую персональную информацию. Для проверки предоставленных
            данных, сайт оставляет за собой право потребовать доказательства
            идентичности в онлайн или офлайн режимах. Использование персональной
            информации Сайт использует личную информацию Пользователя для
            обслуживания и для улучшения качества предоставляемых услуг. Часть
            персональной информации может быть предоставлена банку или платежной
            системе, в случае, если предоставление этой информации обусловлено
            процедурой перевода средств платежной системе, услугами которой
            Пользователь желает воспользоваться. Сайт прилагает все усилия для
            сбережения в сохранности личных данных Пользователя. Личная
            информация может быть раскрыта в случаях, описанных
            законодательством, либо когда администрация сочтет подобные действия
            необходимыми для соблюдения юридической процедуры, судебного
            распоряжения или легального процесса необходимого для работы
            Пользователя с Сайтом. В других случаях, ни при каких условиях,
            информация, которую Пользователь передает Сайту, не будет раскрыта
            третьим лицам. Ссылки На сайте могут содержаться ссылки на другие
            сайты. Сайт не несет ответственности за содержание, качество и
            политику безопасности этих сайтов. Данное заявление о
            конфиденциальности относится только к информации, размещенной
            непосредственно на сайте. Безопасность Сайт обеспечивает
            безопасность учетной записи Пользователя от несанкционированного
            доступа. Уведомления об изменениях Сайт оставляет за собой право
            вносить изменения в Политику конфиденциальности без дополнительных
            уведомлений. Нововведения вступают в силу с момента их
            опубликования. Пользователи могут отслеживать изменения в Политике
            конфиденциальности самостоятельно.
          </p>
        </Box>
      </Modal>
    </motion.div>
  );
};
export default Contact;
