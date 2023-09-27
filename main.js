import { sortBy, filterBy, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const filterSelect = document.querySelector('[data-testid="select-filter"]');
const sortSelect = document.querySelector('[data-testid="select-sort"]');
const clearFiltersButton = document.getElementById('clearFilters');
const root = document.querySelector('#root');
const countElement = document.querySelector("#count");
const footer = document.querySelector('#footer');

const footerElement = document.createElement('p');
footerElement.textContent = '© 2023 - Desarrollado por 👩‍💻 Vivie 💛 < L >';
footer.appendChild(footerElement);

let filteredAndSortedData = data;

function updateDisplay() {
  const filteredData = filterBy(filteredAndSortedData, filterSelect.value);
  const sortedData = sortBy(filteredData, sortSelect.value);
  root.innerHTML = renderItems(sortedData);
  countElement.textContent = computeStats(sortedData);
}

filterSelect.addEventListener("change", (e) => {
  filteredAndSortedData = filterBy(data, e.target.value);
  updateDisplay();
});

sortSelect.addEventListener("change", () => {
  updateDisplay();
});

clearFiltersButton.addEventListener("click", () => {
  filterSelect.value = "";
  sortSelect.value = "asc";
  filteredAndSortedData = data;
  updateDisplay();
});

updateDisplay();
