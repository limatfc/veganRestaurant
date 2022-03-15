import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import ownerImage from "../assets/images/contact-owner.png";
import map from "../assets/images/contact-map.png";
import classes from "../styles/pages/Contact.module.css";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className={classes.contactWrapper}>
      {/* Time to be annoying */}
      {/* Why "as", it means that she is not the owner */}
      {/* Let's pretend that she is the owner and write it as... */}
      {/* alt="The picture of Jennifer Anniston, the famoust actress of friend, as the CEO of the restaurant!" */}
      <img
        className={classes.ownerImage}
        src={ownerImage}
        alt="The actress Jennifer Anniston as the owner of the restaurant."
      />
      <h2>Opening Hours</h2>
      <ul>
        <li>Monday-Thursday 17:00 - 22:00</li>
        <li>Friday- Saturdays 16:00 - 23:00</li>
        <li>Sunday 17:00 - 22:00</li>
      </ul>
      <hr />
      <h2 className={classes.bookATableTitle}>Book a table</h2>
      <ContactForm toggleModal={toggleModal} />
      <hr />
      <h2>Address</h2>
      <ul>
        <li>Centralvägen 18,</li>
        <li>171 45</li>
        <li>Solna, Sweden</li>
      </ul>
      <img
        className={classes.map}
        src={map}
        alt="The restaurant is located in front of the Handelsbanken Solna Centrum"
      />
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </div>
  );
}
