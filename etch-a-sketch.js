function createGrid(size) {
  const container = document.querySelector(`#container`);

  for (i = 0; i < size; i++) {
    const row = document.createElement(`div`);

    for (j = 0; j < size; j++) {
      const col = document.createElement(`div`);
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid(16);
