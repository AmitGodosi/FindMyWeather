import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <h4 className={classes.title}>Herolo Weather Task</h4>
      <ul>
        <li>
          <NavLink
            activeClassName={classes.active}
            to="/forecast"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={classes.active}
            to="/favorite"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
