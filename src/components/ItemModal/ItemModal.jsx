import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import lightclosebtn from "../../assets/lightclosebtn.svg";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            className="modal__close-button"
            src={lightclosebtn}
            alt="close-button"
          />
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__text-base modal__caption">{card.name}</h2>
          <p className="modal__text-base modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
