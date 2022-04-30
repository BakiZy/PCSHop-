import classes from "./Input.module.css";
import React from "react";
//wrapping component with forwardRef to get access to ref and use it as a parameter in the function
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
