import logo from "../assets/icons/logo.png";
import closeIcon from "../assets/icons/modal-close-icon.png";
import classes from "../styles/pages/ContactModal.module.css";

// This is a new -1 category
// "Component in the wrong folder"
// Either create a little folder called pages/contact to put the modal or put it on components
export default function ContactModal({ toggleModal }) {
  return (
    <div>
      <div onClick={toggleModal} className={classes.backdrop}></div>
      <div className={classes.modalWrapper}>
        <img
          className={classes.closeButton}
          onClick={toggleModal}
          src={closeIcon}
          alt="A white X with on a green background."
        />
        <img
          className={classes.logo}
          src={logo}
          alt="a white outline of a bowl with a leaf on top, on orange background."
        />
        <h2>Thank you for your order!</h2>
        <h3>
          Your order is being prepared and will shortly be on its way to you!
        </h3>
      </div>
    </div>
  );
}
