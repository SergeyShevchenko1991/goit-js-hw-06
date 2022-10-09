function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");

let amount = input.min;

function onChangeAmount() {
  input.addEventListener("input", function handleChange(evt) {
    amount = Number(evt.target.value);
  });
}

function onClickCreateBoxes() {
  const createButton = document.querySelector("[data-create]");
  createButton.addEventListener("click", function handleClick(evt) {
    createBoxes(amount);
  });
}

function createBoxes(amount) {
  const list = document.querySelector("#boxes");
  const buffer = document.createDocumentFragment();
  let width = 10;
  let height = 10;

  new Array(amount).fill(undefined).forEach(function () {
    buffer.appendChild(createBox(width, height));
    width += 10;
    height += 10;
  });

  list.appendChild(buffer);
}

function createBox(width, height) {
  const box = document.createElement("div");
  const color = getRandomHexColor();

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = color;

  return box;
}

function onDestroyBoxes() {
  const destroyButton = document.querySelector("[data-destroy]");

  destroyButton.addEventListener("click", function handleClick() {
    const input = document.querySelector("#controls input");

    destroyBoxes();
    amount = 1;
    input.value = 1;
  });
}

function destroyBoxes() {
  const boxes = document.querySelectorAll("#boxes div");

  boxes.forEach(function (node) {
    node.remove();
  });
}

onChangeAmount();
onClickCreateBoxes();
onDestroyBoxes();
