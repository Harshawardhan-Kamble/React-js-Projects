const PizzaItem = (props) => {
  return (
    <>
      <li class="pizza">
        <img src={props.photoName} alt={props.name}></img>
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>&#8377; {props.price}</span>
        </div>
      </li>
    </>
  );
};
export default PizzaItem;
