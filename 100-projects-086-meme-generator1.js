'use strict'

const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
let topText = '';
let bottomText = "";

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

document.getElementById('bottom-text-input').addEventListener('input', function (e) {
    bottomText = e.target.value;
    renderMeme();
});

document.getElementById('generate-button').addEventListener('click', function () {
    const dataUrl = canvas.toDataURL('image/png');
    const newTab = window.open('about:blank', 'image from canvas');
    newTab.document.write("<img src='" + dataUrl + "' alt='Meme'/>");
});

function renderMeme() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.textAlign = "center";
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeText(topText, canvas.width / 2, 50);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.fillStyle = 'White';
    ctx.fillText(topText, canvas.width / 2, 50);
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
}