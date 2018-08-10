import React from "react";
import classes from "./Navbar.css";
import Logo from "../../Logo/Logo";
import NavbarLink from "./NavbarLink/NavbarLink";

const Navbar = props => {
  return (
    <div className={classes.Navbar}>
      <Logo title="ShoppingList" />
      <NavbarLink to="https://www.google.com" name="Google" />
    </div>
  );
};

export default Navbar;
