import { Fragment } from "react";
import pcImage from "../../assets/hardwareimage.jpg";
import classes from "./Header.module.css";
//import CartIcon from "../Cart/CartIcon";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PC shop app</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pcImage} alt="pc hardware motherboard" />
      </div>
    </Fragment>
  );
};

export default Header;
