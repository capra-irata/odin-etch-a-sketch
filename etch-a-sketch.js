function sketch(e) {
  // When the cell is hovered, change its background color
  e.target.classList.add(`hovered`);
}

function createGrid(size) {
  const sketchpad = document.querySelector(`#sketchpad`);

  for (i = 0; i < size; i++) {
    const col = document.createElement(`div`);
    col.classList.add(`column`); // Make columns flex containers

    for (j = 0; j < size; j++) {
      const cell = document.createElement(`div`);
      cell.classList.add(`cell`); // Flex cells to fill column
      cell.addEventListener(`mouseover`, sketch);
      col.appendChild(cell);
    }

    sketchpad.appendChild(col);
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
}

const sizeButton = document.querySelector(`button#size`);
sizeButton.addEventListener(`click`, getGridSize);

createGrid(16);
