function changeFontSize() {
  const input = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");
  input.addEventListener("input", function handleChange(evt) {
    text.style.fontSize = `${evt.target.value}px`;
  });
}
changeFontSize();
