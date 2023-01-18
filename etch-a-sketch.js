function createGrid(size) {
  const sketchpad = document.querySelector(`#sketchpad`);

  for (i = 0; i < size; i++) {
    const col = document.createElement(`div`);
    col.style.cssText = `display: flex; flex-direction: column; flex: 1 0 auto;`;

    for (j = 0; j < size; j++) {
      const cell = document.createElement(`div`);
      cell.style.cssText = `flex: 1 0 auto; border: 2px solid black;`;
      col.appendChild(cell);
    }

    sketchpad.appendChild(col);
  }
}

createGrid(16);
