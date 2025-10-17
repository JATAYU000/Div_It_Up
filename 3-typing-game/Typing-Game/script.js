// Game variables
const arr = [];
let currentRow = 8;
let currentCol = 8;
let drawMode = true;
const container = document.getElementById('container');
const positionElement = document.getElementById('position');
const toggleDrawButton = document.getElementById('toggleDraw');

// Initialize the pixel grid
function initializeGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        const rowArr = [];
        
        for (let j = 0; j < 16; j++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.dataset.row = i;
            pixel.dataset.col = j;
            
            // Add click event for manual drawing
            pixel.addEventListener('click', () => {
                moveToPosition(i, j);
                changeColor(i, j);
            });
            
            row.appendChild(pixel);
            rowArr.push(pixel);
        }
        
        arr.push(rowArr);
        container.appendChild(row);
    }
    
    // Set initial focus
    focusOn(currentRow, currentCol);
    updatePositionDisplay();
}

// Move cursor to specific position
function moveToPosition(row, col) {
    unFocus(currentRow, currentCol);
    currentRow = row;
    currentCol = col;
    focusOn(currentRow, currentCol);
    updatePositionDisplay();
}

// Change color of a pixel
function changeColor(row, col) {
    const pixel = arr[row][col];
    if (drawMode) {
        pixel.style.background = 'black';
    } else {
        pixel.style.background = 'white';
    }
}

// Focus on a specific pixel
function focusOn(row, col) {
    const pixel = arr[row][col];
    pixel.classList.add('focused');
}

// Remove focus from a pixel
function unFocus(row, col) {
    const pixel = arr[row][col];
    pixel.classList.remove('focused');
}

// Update position display
function updatePositionDisplay() {
    positionElement.textContent = `(${currentRow}, ${currentCol})`;
}

// Toggle draw/erase mode
function toggleDrawMode() {
    drawMode = !drawMode;
    toggleDrawButton.textContent = `Draw Mode: ${drawMode ? 'ON' : 'OFF'}`;
    toggleDrawButton.style.background = drawMode ? '#28a745' : '#6c757d';
}

// Reset the canvas
function reset() {
    arr.forEach(row => {
        row.forEach(pixel => {
            pixel.style.background = 'white';
        });
    });
    
    // Reset focus to center
    unFocus(currentRow, currentCol);
    currentRow = 8;
    currentCol = 8;
    focusOn(currentRow, currentCol);
    updatePositionDisplay();
    
    // Reset draw mode
    drawMode = true;
    toggleDrawButton.textContent = 'Draw Mode: ON';
    toggleDrawButton.style.background = '#28a745';
    
    // Remove focus from reset button
    const resetElement = document.getElementById('reset');
    resetElement.blur();
}

// Keyboard event handler
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    switch (key) {
        case 'w':
            if (currentRow > 0) {
                moveToPosition(currentRow - 1, currentCol);
            }
            break;
            
        case 's':
            if (currentRow < 15) {
                moveToPosition(currentRow + 1, currentCol);
            }
            break;
            
        case 'a':
            if (currentCol > 0) {
                moveToPosition(currentRow, currentCol - 1);
            }
            break;
            
        case 'd':
            if (currentCol < 15) {
                moveToPosition(currentRow, currentCol + 1);
            }
            break;
            
        case 'enter':
            changeColor(currentRow, currentCol);
            break;
            
        case ' ':
            e.preventDefault(); // Prevent space from scrolling
            toggleDrawMode();
            break;
            
        case 'r':
            reset();
            break;
    }
});

// Initialize the game when page loads
window.addEventListener('load', initializeGrid);