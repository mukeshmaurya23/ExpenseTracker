import "./Card.css";

function Card(props) {
  const cloud = "card " + props.className;
  return <div className={cloud}>{props.children}</div>;
}
export default Card;
