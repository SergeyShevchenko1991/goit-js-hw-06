function countCategory() {
  const categories = document.querySelector("#categories").children;
  console.log(`Number of categories ${categories.length}`);
}

function getCategoryInfo() {
  const categories = [...document.querySelectorAll("#categories .item")];
  for (const category of categories) {
    const title = category.querySelector("h2");
    const items = category.querySelectorAll("li");
    console.log("\n");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${items.length}`);
  }
}

countCategory();
getCategoryInfo();
