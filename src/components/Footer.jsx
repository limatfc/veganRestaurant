import instagramIcon from "../assets/icons/footer-instagram-icon.png";
import facebookIcon from "../assets/icons/footer-facebook-icon.png";
import classes from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footerWrapper}>
      <div>
        <img
          className={classes.icon}
          src={facebookIcon}
          alt="An outline of the facebook symbol with an orange background"
        />
        <img
          className={classes.icon}
          src={instagramIcon}
          alt="An outline of the instagram symbol with an orange background"
        />
      </div>
      <span>@2022 - Thaisa Lima</span>
    </footer>
  );
}
