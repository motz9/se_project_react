import "./ModalWithForm.css";
import closebtn from "../../assets/closebtn.svg";

function ModalWithForm({ children, buttonText, title }) {
  return (
    <div className="modal modal__is-opened">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close">
          <img className="modal__close-button" src={closebtn} alt="close-button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
