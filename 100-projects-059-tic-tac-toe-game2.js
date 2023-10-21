'use strict'

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let currentPlayer = 'X';

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    drawBoard();
}

function  drawBoard() {
    document.getElementById('board').innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('board').innerHTML += `<div onclick="makeMove(${i}, ${j})">${board[i][j]}</div>`;
        }
    }
}

function makeMove() {
    if (board[i][j] !== '') return;
    board[i][j] = currentPlayer;
    if (checkWin(currentPlayer)) {
        setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        }, 100);
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    drawBoard();
}

