'use strict'

const canvas = document.getElementById('drawing-area');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');
const saveBtn = document.getElementById('save-btn');
const eraserBtn = document.getElementById('eraser-btn');

let drawing = false;
let erasing = false;

canvas.addEventListener("mousedown", e => {
    drawing = true;
    draw(e);
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});

colorPicker.addEventListener('change', () => {
    ctx.strokeStyle = colorPicker.value;
});

brushSize.addEventListener('change', () => {
    ctx.lineWidth = brushSize.value;
});

eraserBtn.addEventListener('click', () => {
    erasing = !erasing;
    if (erasing) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
    }
});

saveBtn.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL('image/png');
    const newTab = window.open('about:blank', 'image');
    newTab.document.write("<img src='" + dataUrl + "'alt='Canvas Image'/>");
});

function draw(e) {
    if (!drawing) return;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}