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
let currentPlayer = 'X';

function initialiseGame(){
    gameActive = true;

    for(i = 0;i < boardSpaces.length; i++){
        boardSpaces[i] = '';
    }

    playerText.textContent = `${currentPlayer} Starts!`;
    cellClick();
}

function cellClick(){
    cells.forEach( cell => {
        cell.addEventListener('click', () => {
            const indexCell = parseInt(cell.getAttribute('cellIndex'));
            chosenCell(cell, indexCell);
        });
    } )
}

function chosenCell(cell,index){

    if(boardSpaces[index] != ''){
        return;
    }

    boardSpaces[index] = currentPlayer;
    playerText.textContent = `${currentPlayer}'s Turn!`;
    cell.textContent = currentPlayer;

    console.log(`cell ${boardSpaces[index]} selected`)

}

initialiseGame();
