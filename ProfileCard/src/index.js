import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
const Avatar = () => {
  return <img className="avatar" src="as.webp" alt="Priety Zinta" />;
};
const Intro = () => {
  return (
    <>
      <h1>Preity Zinta</h1>
      <p>
        An Actress who's taken part in some unforgettable journeys on the silver
        screen.From the Romance of 'Dil Se' to the laughter of 'Dil Chahta Hai',
        I've been fortunate to be a part of movies like 'Kal Ho Naa
        Ho'and'Veer-Zaara', which have touched hearts.
      </p>
    </>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      <div className="skill" style={{ backgroundColor: "#E3242B" }}>
        Actor 🎭
      </div>
      <div className="skill" style={{ backgroundColor: "green" }}>
        Producer 🎬
      </div>
      <div className="skill" style={{ backgroundColor: "gold" }}>
        Writer 📝
      </div>
      <div className="skill" style={{ backgroundColor: "#0039a6" }}>
        Entrepreneur 💼
      </div>
      <div className="skill" style={{ backgroundColor: "#AF69EF" }}>
        Cricket Fan 🏏
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
