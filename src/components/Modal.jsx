import ReactDOM from "react-dom";
import ContactModal from "../pages/ContactModal";

// good
export default function Modal({ showModal, toggleModal }) {
  if (!showModal) return null;

  return (
    <div>
      {ReactDOM.createPortal(
        <ContactModal toggleModal={toggleModal} />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}
