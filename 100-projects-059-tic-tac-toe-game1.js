'use strict'

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

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

function drawBoard() {
    document.getElementById('board').innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('board').innerHTML += `<div onclick="makeMove(${i}, ${j})">${board[i][j]}</div>`;
        }
    }
}