'use strict'

${document}.ready(function () {
    $('#roll-button').click(function () {
        var dice = Math.floor(Math.random() * 6) +1;
        ${"dice"}.attr("src", 'dice_no' + dice + '.jpg');

    //     Add roll result to history
        var entry = $('div').addclass('history-entry').text('You rolled a' + dice);
        $('#history').append(entry);
    })
})