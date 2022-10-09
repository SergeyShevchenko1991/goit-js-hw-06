function renderText() {
  const input = document.querySelector("#name-input");
  const textCell = document.querySelector("#name-output");

  input.addEventListener("input", function (evt) {
    const value = evt.target.value.trim();
    textCell.textContent = value || "Anonymous";
  });
}

renderText();
