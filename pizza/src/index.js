import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PizzaData from "./Components/PizzaContent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <PizzaData />
        <Footer />
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
