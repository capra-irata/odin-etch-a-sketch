createGrid(16);

const sizeButton = document.querySelector(`button#size`);
sizeButton.addEventListener(`click`, getGridSize);

function getGridSize() {
  let size;
  do {
    size = +prompt(`What size grid would you like? (Max 100)`, 16);
  } while (isNaN(size) || size < 1); // Repeat until a valid positive number is entered

  size = Math.floor(size); // Remove decimals
  createGrid(Math.min(size, 100)); // Max grid size of 100
}

function createGrid(size) {
  const grid = document.querySelector(`#grid`);
  grid.replaceChildren(); // Remove old grid

  for (let i = 0; i < size; i++) {
    const col = document.createElement(`div`);
    col.classList.add(`column`); // Make columns flex containers

    for (let j = 0; j < size; j++) {
      const cell = document.createElement(`div`);
      cell.classList.add(`cell`); // Flex cells to fill column
      cell.style[`background-color`] = `rgb(255, 255, 255)`;
      cell.addEventListener(`mouseover`, sketch);

      col.appendChild(cell);
    }

    grid.appendChild(col);
  }
}

function sketch(e) {
  // Create an array of the current cell's rgb values
  let color = e.target.style[`background-color`].slice(4, -1).split(`,`);
  if (+color[0] === 0) return; // Return early if color is black

  color = color.map((value) => value - 26); // Darken color by ~10%
  e.target.style[`background-color`] = `rgb(${color.join(`, `)})`;
}
