import classes from "./HardwareItem.module.css";
import HardwareItemForm from "./HardwareItemForm";

const HardwareItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    //could go with props.meal.xx}
    <li className={classes.hardware}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <HardwareItemForm />
      </div>
    </li>
  );
};

export default HardwareItem;
