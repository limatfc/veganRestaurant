import instagramIcon from "../assets/icons/footer-instagram-icon.png";
import facebookIcon from "../assets/icons/footer-facebook-icon.png";
import classes from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footerWrapper}>
      <ul>
        <li>Centralvägen 18</li>
        <li>171 45</li>
        <li>Solna, Sweden</li>
      </ul>
      <ul>
        <li>Monday-Thursday 17:00 - 22:00</li>
        <li>Friday- Saturdays 16:00 - 23:00</li>
        <li>Sunday 17:00 - 22:00</li>
      </ul>
      <span>
        Did you like our food? Also like us on our social medias accounts!
      </span>
      <div>
        <a
          href={"https://www.instagram.com/lima_fcthaisa/"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.icon}
            src={facebookIcon}
            alt="An outline of the facebook symbol with an orange background"
          />
        </a>
        <a
          href={"https://www.instagram.com/lima_fcthaisa/"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.icon}
            src={instagramIcon}
            alt="An outline of the instagram symbol with an orange background"
          />
        </a>
      </div>
      <span>@2022 - Thaisa Lima</span>
    </footer>
  );
}
