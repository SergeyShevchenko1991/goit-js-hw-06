function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  const button = document.querySelector(".change-color");
  const colorElement = document.querySelector(".color");

  button.addEventListener("click", function handleClick() {
    const color = getRandomHexColor();
    colorElement.textContent = color;
    document.body.style.backgroundColor = color;
  });
}

changeColor();
