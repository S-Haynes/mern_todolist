import React from "react";
import classes from "./Logo.css";

const Logo = props => {
  return (
    <div className={classes.Logo}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Logo;
