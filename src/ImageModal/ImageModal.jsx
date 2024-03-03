import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, imageURL, altText }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div className={css.modal}>
        <img src={imageURL} alt={altText} />
        <button onClick={onClose}>close </button>
      </div>
    </Modal>
  );
}

//  <img src={urls.regular} alt={alt_description} />;
