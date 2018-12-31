let dimension = 16;
let color = 'black';
let colored = false;



const gridContainer = document.querySelector('div#sketch_pad');
const btnDimension = document.querySelector('#btnDimension');
const btnColored = document.querySelector('#btnColored');
const btnBlack = document.querySelector('#btnBlack');
const btnClear = document.querySelector('#btnClear');

btnDimension.addEventListener('click', changeGridDimension);
btnColored.addEventListener('click', coloredClicked);
btnBlack.addEventListener('click', blackClicked);
btnClear.addEventListener('click', clearClicked);

createGrids(dimension);

 function clearClicked() {
    color = 'white';
    colored = false;
 }

function blackClicked() {
    color = 'black';
    colored = false;
}

function coloredClicked() {
    colored = true;

}

function changeGridDimension() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);

    }
    dimension = +prompt("Enter grid dimension[1-64]");
    createGrids(dimension);
    color = 'black';
}

function createGrids(grids) {
    for (i = 0; i < grids * grids; i++) {
        const div = document.createElement('div');
        div.style.width = gridContainer.clientWidth / grids + 'px';
        div.style.height = gridContainer.clientHeight / grids + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.display = 'inline-block';
        div.style.cssFloat = 'left';
        div.style.margin = 0;
        div.style.padding = 0;
        div.addEventListener('mouseover', changeColor);

        gridContainer.appendChild(div);
    }
}

function changeColor() {
    if (colored) {
        color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    }
    this.style.backgroundColor = color;
}