function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
   
    let squares = new DocumentFragment();
  
    for (let i = 0; i < x * y; i++) {
      let square = document.createElement('div');
      square.className = 'square';
      square.addEventListener('click', function() {
        square.style.backgroundColor = 'black';
      });
      squares.appendChild(square);
    }

    gridElement.appendChild(squares);
}

buildGrid(16, 16, 25, document.querySelector(".grid"));

