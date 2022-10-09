function submitForm() {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function handleSubmit(evt) {
    evt.preventDefault();
    const data = generetaData(form.elements);
    const isInvalid = formValidation(data);

    if (isInvalid) return alert("Всі поля повинні бути заповнені!");

    console.log(data);
    form.reset();
  });
}

function formValidation(data) {
  return !Object.values(data).every(function (value) {
    return value;
  });
}

function generetaData({ email, password }) {
  return {
    email: email.value,
    password: password.value,
  };
}

submitForm();
