import mealsImg from "../../Assets/meals.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="Food on Table"></img>
      </div>
    </Fragment>
  );
}
export default Header;
