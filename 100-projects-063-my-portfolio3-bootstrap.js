'use strict'

//JQUERY for Interactivity

$(document).ready(function () {
    $("#menu-icon").click(function (e) {
        e.preventDefault();
        $("#contact-list").toggle();
    });

    $("#note-icon").click(function(e) {
        e.preventDefault();
        $("#note-popup").toggle();
    });

    $("#note-save").click(function(e) {
        e.preventDefault();
        $("#note-popup").hide();
    });

    $(window).on('load', function() {
        const savedNote = localStorage.getItem('note');
        if (savedNote) {
            $("#note-text").val(savedNote);
        }
    });

    $("#btnView").click(function(e) {
        e.preventDefault();
        $(".more-info").toggle();
    });
});