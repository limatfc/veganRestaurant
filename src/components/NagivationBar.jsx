import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import classes from "../styles/components/NavigationBar.module.css";

export default function NavigatioBar() {
  return (
    <nav className={classes.navigationBarWrapper}>
      <Link to="/main">
        <button>Main</button>
      </Link>
      <Link to="/desserts">
        {" "}
        <button>Desserts</button>
      </Link>
      <Link to="/">
        <img
          src={Logo}
          alt="a white outline of a bowl with a leaf on top, on orange background."
        />
      </Link>
      <Link to="/drinks">
        {" "}
        <button>Drinks</button>
      </Link>
      <Link to="/contact">
        {" "}
        <button>Contact</button>
      </Link>
    </nav>
  );
}
