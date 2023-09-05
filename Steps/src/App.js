import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const next = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const previous = () => {
    if (step > 1) setStep(step - 1);
  };
  const handlerCancel = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button className="close" onClick={handlerCancel}>
        &times;
      </button>
      {isVisible && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={previous}
              style={{ backgroundColor: "#e74c3c", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#3498db", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
