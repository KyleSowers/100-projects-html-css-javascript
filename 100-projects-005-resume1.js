"use strict"

document.getElementById("toggle-button").onclick = function() {
    let content = document.getElementById("business-content");
    let header = document.getElementById("business-header");

    if (content.style.display === "none") {
        content.style.display = "block";
        header.style.display = "block";
    } else {
        content.style.display = "none";
        header.style.display = "none";
    }
}