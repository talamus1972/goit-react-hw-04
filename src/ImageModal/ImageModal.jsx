import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, url }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div className={css.modal} onClick={onClose}>
        <img src={url} />
      </div>
    </Modal>
  );
}
