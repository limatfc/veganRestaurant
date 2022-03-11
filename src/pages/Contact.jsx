import ContactForm from "../components/ContactForm";
import ownerImage from "../assets/images/contact-owner.png";
import map from "../assets/images/contact-map.png";
import classes from "../styles/pages/Contact.module.css";

export default function Contact() {
  return (
    <div className={classes.contactWrapper}>
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
      <ContactForm />
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
    </div>
  );
}
