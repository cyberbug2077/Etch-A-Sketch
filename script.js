const gridWidthInPixels = 960;

function makeGrid(width, height, padColor) {
    const grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    grid.style.width = `${gridWidthInPixels}px`;
    for (let i = 0; i < height; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        for (let j = 0; j < width; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            let tileLength = gridWidthInPixels / width;
            tile.style.width = `${tileLength}px`;
            tile.style.height = `${tileLength}px`;
            tile.style.backgroundColor = padColor;
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
    
}


function initialize(pixels, padColor, penColor) {
    makeGrid(pixels, pixels, padColor);
    const allTiles = document.querySelectorAll('.tile');
    function paint() {
        this.style.backgroundColor = penColor;
    }
    allTiles.forEach(tile => tile.addEventListener('mouseover', paint));
}


const modify = document.querySelector('.changeSize');

modify.addEventListener('click', () => {
    let newSize = +prompt("Please enter new pad size");
    if (newSize == NaN || newSize > 100) {
        alert("please enter a number less than 100");
        return;
    }
    initialize(newSize, 'white', 'black');
})