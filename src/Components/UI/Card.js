import "./Card.css";
function Card(props) {
  const classes = props.className;
  return <div class={`${classes} card`}>{props.children}</div>;
}
export default Card;
