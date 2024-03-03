import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, url }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(128, 128, 128, 0.75)",
        },
        content: {
          maxWidth: "90%",
          maxHeight: "90%",
          margin: "auto",
          padding: 0,
        },
      }}
    >
      <div className={css.modal}>
        <img src={url} />
      </div>
    </Modal>
  );
}
