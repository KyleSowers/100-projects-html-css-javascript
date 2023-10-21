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

function makeMove(i, j) {
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

function checkWin(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

drawBoard();
