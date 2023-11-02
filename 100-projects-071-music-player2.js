'use strict'

window.onload = function () {
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    var playButton = document.getElementById('play');
    var nextButton = document.getElementById('next');
    var prevButton = document.getElementById('prev');
    var pauseButton = document.getElementById('pause');
    var replayButton = document.getElementById('replay');
    var volumeControl = document.getElementById('volume');

    var currentTimeDisplay = document.getElementById('currentTime');
    var songTitle = document.getElementById('songTitle');

    var songs = ['101soundboards.com.mp3'];
    var currentSongIndex = 0;

    function loadSong() {
        source.src = songs[currentSongIndex];
        songTitle.textContent = songs[currentSongIndex];
        audio.load();
    }

    playButton.addEventListener('click', function () {
        audio.play();
    });

    nextButton.addEventListener('click', function () {
        currentSongIndex = ( currentSongIndex + 1) % songs.length;
        loadSong();
        audio.play();
    });

    prevButton.addEventListener('click', function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong();
        audio.play();
    });

    pauseButton.addEventListener('click', function () {
        audio.pause();
    });

    replayButton.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });

    volumeControl.addEventListener('input', function () {
        audio.volume = this.value;
    });

    audio.ontimeupdate = function () {
        var minutes = Math.floor(audio.currentTime / 60);
        var seconds = Math.floor(audio.currentTime % 60);
        currentTimeDisplay.textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }

    loadSong();
}