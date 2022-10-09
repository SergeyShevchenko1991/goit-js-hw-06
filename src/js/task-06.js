function validation() {
  const input = document.querySelector("#validation-input");
  const minLendth = Number(input.dataset.length);

  input.addEventListener("blur", function handleValidation(evt) {
    const value = evt.target.value;

    if (value.length >= minLendth) {
      input.classList.remove("invalid");
      input.classList.add("valid");
      return;
    }

    input.classList.remove("valid");
    input.classList.add("invalid");
  });
}

validation();
