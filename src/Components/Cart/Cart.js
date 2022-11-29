import Modal from "../UI/Modal";
import "./Cart.css";
function Cart(props) {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "cd", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>12.55</span>
      </div>
      <div className="actions">
        <button onClick={props.onHideCart} className="button--alt">
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
