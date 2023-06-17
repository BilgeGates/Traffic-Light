const headCircle = document.querySelectorAll(".circle");
let activeLight = 0;

const changeLight = () => {
  headCircle[activeLight].classList.remove("circleAfterActive");
  headCircle[activeLight].classList.remove(
    headCircle[activeLight].getAttribute("color")
  );
  activeLight = (activeLight + 1) % 3;
  const currentLight = headCircle[activeLight];
  currentLight.classList.add("circleAfterActive");
  currentLight.classList.add(currentLight.getAttribute("color"));
};

setInterval(changeLight, 1000);
