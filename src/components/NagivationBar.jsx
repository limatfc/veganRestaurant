import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import classes from "../styles/components/NavigationBar.module.css";

export default function NavigatioBar() {
  return (
    <nav className={classes.navigationBarWrapper}>
      <Link to="/main">Main</Link>
      <Link to="/desserts">Desserts</Link>
      <Link to="/">
        <img
          src={Logo}
          alt="a white outline of a bowl with a leaf on top, on orange background."
        />
      </Link>
      <Link to="/drinks">Drinks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
