'use strict'

$(document).ready(function () {
    var audio = $('#audio')[0];
    var source = $('#source');
    var playButton = $('#play');
    var nextButton = $('#next');
    var prevButton =$('#prev');
    var pauseButton = $('#pause');
    var replayButton = $('#replay');
    var volumeControl = $('#volume');
    var currentTimeDisplay = $('#currentTime');
    var songTitle = $('#songTitle');

    var songs = ['images/song1.mp3', 'images/song2.mp3', 'images/song3.mp3'];
    var currentSongIndex = 0;

    function loadSong() {
        source.attr('src', songs[currentSongIndex]);
        songTitle.text(songs[currentSongIndex]);
        audio.load();
    }

    playButton.on('click', function () {
        audio.play();
    })

    nextButton.on('click', function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong();
        audio.play();
    });

    prevButton.on('click', function () {
        currentSongIndex = (currentSongIndex - 1) % songs.length;
        loadSong();
        audio.play();
    });

    pauseButton.on('click', function () {
        audio.pause();
    });

    replayButton.on('click', function () {
        audio.currentTime = 0;
        audio.play();
    });

    volumeControl.on('input', function () {
        audio.volume = this.value;
    });

    audio.ontimeupdate = function () {
        var minutes = Math.floor(audio.currentTime / 60);
        var seconds = Math.floor(audio.currentTime % 60);
        currentTimeDisplay.text(minutes + ':' + (seconds < 10 ? '0' + seconds : seconds));
    }

    loadSong();

});