const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function appendIngredients() {
  const buffer = document.createDocumentFragment();
  const list = document.querySelector("#ingredients");

  for (const ingredient of ingredients) {
    const itemHtml = createItem(ingredient);
    buffer.appendChild(itemHtml);
  }

  list.appendChild(buffer);
}

function createItem(name) {
  const item = document.createElement("li");
  item.textContent = name;
  item.classList.add("item");

  return item;
}

appendIngredients();
