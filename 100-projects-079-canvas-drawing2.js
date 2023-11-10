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
document.querySelector('#randomColor').addEventListener('click', randomColor);
document.querySelector('#save').addEventListener('click', saveCanvas);

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

function randomColor() {
    brushColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('#colorPicker').value = brushColor;
}

function saveColor() {
    var link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
}