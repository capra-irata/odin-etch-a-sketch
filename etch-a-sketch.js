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

createGrid(16);
