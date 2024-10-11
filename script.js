const cells = document.querySelectorAll('.cell');
const playerText = document.querySelector('#playerText');
const restartBtn = document.querySelector('#restartBtn');

let boardSpaces = ['','','','','','','','',''];
let winningCombinations = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
let gameActive = false;
let playersTurn = 'X';

function initialiseGame(){
    gameActive = true;

    for(i = 0;i < boardSpaces.length; i++){
        boardSpaces[i] = '';
    }

    playerText.textContent = `${playersTurn} Starts!`;
}

function cellClick(){
    let cellIndex = cell.getAttribute('cellIndex');
    cells.forEach((cell, cellIndex) => {
        cell.addEventListener('click', () => {
        if(boardSpaces[cellIndex] !== ''){
            return;
        }

        cellInput(cell, cellIndex);
        console.log(boardSpaces)
    }
)})}


function cellInput(cell, cellIndex){

    boardSpaces[cellIndex] = playersTurn;
    cell.textContent = playersTurn;

}

initialiseGame();