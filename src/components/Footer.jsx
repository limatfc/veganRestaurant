import instagramIcon from "../assets/icons/footer-instagram-icon.png";
import facebookIcon from "../assets/icons/footer-facebook-icon.png";
import classes from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footerWrapper}>
      <img
        className={classes.facebookIcon}
        src={facebookIcon}
        alt="An outline of the facebook symbol with an orange background"
      />
      <img
        src={instagramIcon}
        alt="An outline of the instagram symbol with an orange background"
      />
      <span>@2022 - Thaisa Lima</span>
    </footer>
  );
}
