const cells = document.querySelectorAll(".box"); 
const chance = document.querySelector("#player");
const newButton = document.querySelector("#newGame");

let vict = 0;
let symbol;
let cellX = [];
let cellO = [];
let currentIndex = 0; // Keep track of keyboard navigation

const winningPossibilities = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
];

newButton.addEventListener("click", startGame);
document.addEventListener("keydown", handleKeyboardNavigation);


function startGame() {
    newButton.blur();
    symbol = "O";
    cellO = [];
    cellX = [];
    vict = 0;
    currentIndex = 0;
    chance.innerHTML = `${symbol}'s turn`;
    
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("highlight");
        cell.removeEventListener("click", instantiate);
        cell.addEventListener("click", instantiate);
    });
    
    
}

function changePlayer() {
    symbol = symbol === "O" ? "X" : "O";
    chance.innerHTML = `${symbol}'s turn`;
}

function winGame(playerCells, player) {
    if (winningPossibilities.some(pattern => pattern.every(index => playerCells.includes(index)))) {
        chance.innerHTML = `${player} has won the game!`;
        vict = 1;
        return;
    }
    if (cellX.length + cellO.length === 9) {
        chance.innerHTML = "It's a draw!";
        vict = 1;
        return;
    }
    changePlayer();
}

function instantiate(event) {
    let cell = event.target;
    if (cell.innerHTML !== "" || vict > 0) return; // Prevent overwriting or playing after a win

    let index = cell.getAttribute("data-index"); // Get the cell index

    cell.innerHTML = symbol;
    if (symbol === "X") {
        cellX.push(index);
        cellX.sort();
    } else {
        cellO.push(index);
        cellO.sort();
    }

    winGame(symbol === "X" ? cellX : cellO, symbol);
}

function handleKeyboardNavigation(event) {
    if (vict > 0) return; // Stop if the game is over

    const rowSize = 3;
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % cells.length;
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + cells.length) % cells.length;
    } else if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + rowSize) % cells.length;
    } else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - rowSize + cells.length) % cells.length;
    } else if (event.key === "Enter") {
        instantiate({ target: cells[currentIndex] }); // Fix: Ensure Enter key works
    }

    highlightCell();
}

function highlightCell() {
    cells.forEach(cell => cell.classList.remove("highlight"));
    cells[currentIndex].classList.add("highlight");
}



