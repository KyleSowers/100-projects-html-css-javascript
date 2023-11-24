'use strict'

const form = document.getElementById("post-form");
const titleInput = document.getElementById("postTitle");
const bodyInput = document.getElementById("postBody");
const postList = document.getElementById("post-list");
const API_URL = `http://my-json-server.typicode.com/SanghyuNa-web/blogmanage/posts`;

//Fetch initial posts
fetch(API_URL)
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((posts) => {
            addPostToPage(post);
        });
    });

//Form Submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const post = {
        title: titleInput.value,
        body: bodyInput.value,
    };

    //Real-world you would send POSt request to API here
    addPostToPage(post);

    //Clear input fields
    titleInput.value = "";
    bodyInput.value = "";
});

function addPostToPage(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    postDiv.appendChild(postTitle);

    const postBody = document.createElement("p");
    postBody.textContent = postBody;
    postDiv.appendChild(postBody);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        //Real-world scenario, send delete request to API here
        postList.removeChild(postDiv);
    });

    postDiv.appendChild(deleteButton);
    postList.appendChild(postDiv);
}