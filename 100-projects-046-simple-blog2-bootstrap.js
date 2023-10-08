'use strict'

let comments = [];

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const newComment = commentInput.value;
    if (commentInput) {
        comments.push(newComment);
        commentInput.value = "";
        renderComments();
    }
}

function renderComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = "";
    comments.forEach(comment => {
        const div =document.createElement('div');
        div.className = 'comment';
        div.textContent = comment;
        commentsDiv.appendChild(div);
    });
}