'use strict'

const canvas = document.querySelector('#drawArea');
const ctx = canvas.getContext('2d');

let drawing = false;

let brushColor = '#000000';
let brushSize = 10;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mousemove', draw);

document.querySelector('#colorPicker').addEventListener('change', changeColor);
document.querySelector('#brushSize').addEventListener('change', changeSize);
document.querySelector('#clear').addEventListener('click', clearCanvas);

function start(e) {
    drawing = true;
    draw(e);
}

function stop() {
    drawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function changeColor(e) {
    brushColor = e.target.value;
}

function changeSize(e) {
    brushSize = e.target.value;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


