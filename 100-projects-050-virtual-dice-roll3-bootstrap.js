'use strict'

$(document).ready(function () {
    $('#roll-button').click(function () {
        var dice = Math.floor(Math.random() * 6) + 1;
        $("#dice").attr("src", 'images/dice_no' + dice + '.png');

    //     Add roll result to history
        var entry = $('<div>').addClass('history-entry').text('You rolled ' + dice);
        $('#history').append(entry);
    })
})