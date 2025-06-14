import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import lightclosebtn from "../../assets/lightclosebtn.svg";

function ItemModal({ activeModal, card, onClose, onDeleteItem }) {
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
        <img src={card.link} alt="item name" className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-container">
            <h2 className="modal__text-base modal__caption">{card.name}</h2>
            <button onClick={() => onDeleteItem(card._id)} type="button" className="item-modal__delete-button">Delete item</button>
          </div>
          <p className="modal__text-base modal__weather">
            Weather: {card.weather}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
