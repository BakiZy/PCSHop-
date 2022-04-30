import classes from "./HardwareItem.module.css";
import HardwareItemForm from "./HardwareItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const HardwareItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCardHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    //could go with props.meal.xx}
    <li className={classes.hardware}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <HardwareItemForm onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};

export default HardwareItem;
