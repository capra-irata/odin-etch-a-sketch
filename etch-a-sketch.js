function getRandomColor() {
  // Generate a random RGB value
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];
}

function sketch(e) {
  // When the cell is hovered, change its background color
  // e.target.classList.add(`hovered`);

  const color = getRandomColor();
  e.target.style[`background-color`] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function createGrid(size) {
  const grid = document.querySelector(`#grid`);
  grid.replaceChildren(); // Remove old grid

  for (i = 0; i < size; i++) {
    const col = document.createElement(`div`);
    col.classList.add(`column`); // Make columns flex containers

    for (j = 0; j < size; j++) {
      const cell = document.createElement(`div`);
      cell.classList.add(`cell`); // Flex cells to fill column
      cell.addEventListener(`mouseover`, sketch);
      col.appendChild(cell);
    }

    grid.appendChild(col);
  }
}

function getGridSize() {
  let size;

  // Repeat until a valid positive number is entered
  do {
    size = +prompt(`How wide would you like the grid? (Max 100)`, 16);
  } while (isNaN(size) || size < 1);

  size = Math.floor(size); // Remove decimals
  if (size > 100) size = 100; // Max grid size of 100
  createGrid(size);
}

const sizeButton = document.querySelector(`button#size`);
sizeButton.addEventListener(`click`, getGridSize);

createGrid(16);
