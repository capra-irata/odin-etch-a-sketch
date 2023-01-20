function sketch(e) {
  // Create an array from the values of the rgb string
  let color = e.target.style[`background-color`].slice(4, -1).split(`,`);
  if (+color[0] === 0) return; // Return early if color is black

  color = color.map((value) => value - 26); // Darken color by ~10%
  e.target.style[`background-color`] = `rgb(${color.join(`, `)})`;
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
      cell.style[`background-color`] = `rgb(255, 255, 255)`;
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
