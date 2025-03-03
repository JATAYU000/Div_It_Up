const cells = document.querySelectorAll("#box");
const chance = document.querySelector("#player");
const newButton = document.querySelector("#newGame");

let vict=0;
let symbol;

let cellX = [];
let cellO = [];

let options = [];

const winningPossibilities = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
]

newButton.addEventListener('click',startGame);

function startGame(){
    cells.forEach(cell=>{
        cell.innerHTML='';
    })
    chance.innerHTML='';
    symbol='X';
    cellO=[];
    cellX=[]
    vict=0;
    selectBox();
}


function selectBox(){
    cells.forEach(cell=>{
        cell.addEventListener('click',instantiate);
    })
    
}

function changePlayer(){
    if(symbol=='O'){
        symbol='X';
    }else{
        symbol='O';
    }
    chance.innerHTML=`${symbol} 's chance to play`;
}



function winGame(cells, player) { 
    for (let i = 0; i < winningPossibilities.length; i++) {
        if ((hasSubset(cells,winningPossibilities))) {
            chance.innerHTML = `${player} has won the game.`;
         // Stop further execution after a win
            vict+=1;
            return;
        }
    }
    changePlayer();
}

function hasSubset(x,groups){
    const xSet = new Set(x);
    return groups.some(group => group.every(num => xSet.has(num)));
}

function instantiate(event){
    let cell = event.target;
    if (cell.innerHTML !== "") return; // Prevent overwriting
    cell.innerHTML=symbol;
    if(symbol == 'X'){
        cellX.push(cell.className); 
        cellX.sort();
        console.log(cellX);
    }else{
        cellO.push(cell.className);
        cellO.sort();
        console.log(cellO);
    }
    winGame(cellX,symbol);
    if(vict>0){
        cells.forEach(cell =>{
            cell.removeEventListener('click',instantiate);
        })
    }
}

