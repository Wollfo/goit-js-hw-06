const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const createEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const createList = document.createElement("li");
    createList.classList.add(".item");
    createList.textContent = ingredient;
    return createList;
  });
};
const elements = createEl(ingredients);
const addEl = document.querySelector("#ingredients");
addEl.append(...elements);
