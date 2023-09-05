import PizzaItem from "./PizzaMenu";

function PizzaItems() {
  const pizzaItems = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 120,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 350,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 400,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 300,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 450,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 250,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  return (
    <ul className="pizzas">
      {pizzaItems.map((pizza, index) => (
        <PizzaItem
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
        />
      ))}
    </ul>
  );
}
export default PizzaItems;
\\