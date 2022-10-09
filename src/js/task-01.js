function countCategory() {
  const categories = document.querySelectorAll(".item");

  console.log(`Number of categories: ${categories.length}`);
  console.log(" ");
  for (const category of categories) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
  }
}

countCategory();
