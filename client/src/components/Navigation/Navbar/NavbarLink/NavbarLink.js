import React from "react";
import classes from "./NavbarLink.css";

const NavbarLink = props => {
  return (
    <li className={classes.NavbarLink}>
      <a href={props.to}>{props.name}</a>
    </li>
  );
};

export default NavbarLink;
