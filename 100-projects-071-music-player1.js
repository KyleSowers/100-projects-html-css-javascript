'use strict'

window.onload = function () {
    var audio = document.getElementById('audio');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var skipButton = document.getElementById('skip');
    var replayButton = document.getElementById('replay');

playButton.addEventListener('click', function () {
    audio.play();
});

pauseButton.addEventListener('click', function () {
    audio.pause();
});

skipButton.addEventListener('click', function () {
    audio.currentTime += 10;
});

replayButton.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
});
}