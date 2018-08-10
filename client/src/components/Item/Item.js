import React from "react";
import classes from "./Item.css";
const Item = props => {
  return (
    <div className={classes.Item}>
      <p>
        <span onClick={props.delete} className={classes.Delete}>
          &times;
        </span>
        {props.name}
      </p>
    </div>
  );
};

export default Item;
