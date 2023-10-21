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

