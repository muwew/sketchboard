const btn = document.querySelector('#enter');
const input = document.querySelector('#userDim');
const container = document.querySelector('#container');

// Create a grid of cells
function createGrid(dim) {
    for(let i=0; i<dim; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<dim; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    // After grid is created, addEventListener to each cell
    activateCells();
}

// Removes the grid
function removeGrid() {
    // Remove all children from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Generates a random color in the format rgb(r,g,b)
function randColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

// Add event listeners to each cell
function activateCells(){
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        // Change color on mouseover
        cell.addEventListener('mouseover', () => {
            let color = randColor();
            cell.style.backgroundColor = color;
        });
        // Change color back to black after delay
        cell.addEventListener('mouseout', () => {
            setTimeout(() => {
                cell.style.backgroundColor = 'black';
            }, 10e3);
        });
    });    
}

// Event listener for the enter button
btn.addEventListener('click', () => {
    let dim = input.value;
    // Input validation
    if(dim > 100){
        alert('Please enter a number less than 100');
        return;
    }
    else if (dim < 1){
        alert('Please enter a number greater than 0');
        return;
    }
    // Successful case, removes grid and creates a new one
    else{
        removeGrid();
        createGrid(dim);
        input.value = '';
    }
});
