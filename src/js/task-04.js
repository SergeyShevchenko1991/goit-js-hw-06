let counterValue = 0;

function createCounter() {
  const decrement = document.querySelector('[data-action="decrement"]');
  const increment = document.querySelector('[data-action="increment"]');
  const value = document.querySelector("#value");

  value.textContent = counterValue;

  decrement.addEventListener("click", function () {
    counterValue -= 1;
    value.textContent = counterValue;
  });

  increment.addEventListener("click", function () {
    counterValue += 1;
    value.textContent = counterValue;
  });
}

createCounter();
