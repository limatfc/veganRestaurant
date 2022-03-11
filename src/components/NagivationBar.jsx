import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import classes from "../styles/components/NavigationBar.module.css";

export default function NavigatioBar() {
  return (
    <nav className={classes.navigationBarWrapper}>
      <Link className={classes.link} to="/main">
        Main
      </Link>
      <Link className={classes.link} to="/desserts">
        Desserts
      </Link>
      <Link to="/">
        <img
          src={Logo}
          alt="a white outline of a bowl with a leaf on top, on orange background."
        />
      </Link>
      <Link className={classes.link} to="/drinks">
        Drinks
      </Link>
      <Link className={classes.link} to="/contact">
        Contact
      </Link>
    </nav>
  );
}
