import Contact from "../Contact/Contact";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflowY = "scroll";
  };
  return (
    <>
      <div className={styles.darkBG}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>
              <RiCloseLine />
            </button>
            <div className={styles.modalContent}>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
