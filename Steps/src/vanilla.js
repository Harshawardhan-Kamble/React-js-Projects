document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const cancelButton = document.getElementById("cancelButton");
  const stepsContainer = document.getElementById("stepsContainer");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");

  let step = 1;

  cancelButton.addEventListener("click", () => {
    stepsContainer.style.display = "none";
  });

  previousButton.addEventListener("click", () => {
    if (step > 1) {
      step--;
      updateStep();
    }
  });

  nextButton.addEventListener("click", () => {
    if (step < 3) {
      step++;
      updateStep();
    }
  });

  function updateStep() {
    const numbers = document.querySelectorAll(".numbers div");
    numbers.forEach((number, index) => {
      if (index + 1 === step) {
        number.classList.add("active");
      } else {
        number.classList.remove("active");
      }
    });

    const message = document.querySelector(".message");
    message.textContent = `Step ${step}: ${messages[step - 1]}`;
  }
});
