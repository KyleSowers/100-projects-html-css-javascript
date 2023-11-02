'use strict'

$(document).ready(function () {
    var audio = $('#audio')[0];
    var source = $('#source');
    var playButton = $('#play');
    var nextButton = $('#next');
    var prevButton =$('#prev');
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



})