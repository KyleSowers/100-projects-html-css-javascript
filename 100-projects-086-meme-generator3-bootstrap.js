'use strict'

const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
let topText = '';
let middleTopText = '';
let middleBottomText = '';
let bottomText = '';
let fontSize = '30px';
let fontStyle = 'Arial';
let fontColor = '#ffffff';

document.getElementById('image-input').addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        img.onload = renderMeme;
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('top-text-input').addEventListener('input', function (e) {
    topText = e.target.value;
    renderMeme();
});

document.getElementById('middle-top-text-input').addEventListener('input', function (e) {
    middleTopText = e.target.value;
    renderMeme();
});

document.getElementById('middle-bottom-text-input').addEventListener('input', function (e) {
    middleBottomText = e.target.value;
    renderMeme();
});

document.getElementById('bottom-text-input').addEventListener('input', function (e) {
    bottomText = e.target.value;
    renderMeme();
});

document.getElementById('font-size-input').addEventListener('change', function (e) {
    fontSize = e.target.value + 'px';
    renderMeme();
});

document.getElementById('font-style-input').addEventListener('change', function (e) {
    fontStyle = e.target.value;
    renderMeme();
});

document.getElementById('color-input').addEventListener('change', function (e) {
    fontColor = e.target.value;
    renderMeme();
});

document.getElementById('generate-button').addEventListener('click', function (e) {
    const dataUrl = canvas.toDataURL('image/png');
    const newTab = window.open('about:blank', 'image from canvas');
    newTab.document.write("<img src='" + dataUrl + "' alt='Meme'/>");
});

function  renderMeme() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + ' ' + fontStyle;
    ctx.textAlign  = 'center';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeText(topText, canvas.width / 2, 50);
    ctx.strokeText(middleTopText, canvas.width / 2, canvas.height / 2 -20);
    ctx.strokeText(middleBottomText, canvas.width / 2, canvas.height / 2 + 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.fillStyle = fontColor;
    ctx.fillText(topText, canvas.width / 2, 50);
    ctx.fillText(middleTopText, canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillText(middleBottomText, canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
}

