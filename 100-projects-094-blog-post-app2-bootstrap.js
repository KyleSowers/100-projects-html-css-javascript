'use strict'

const form = document.getElementById("post-form");
const searchTitleInput = document.getElementById("searchTitle");
const sortPostsInput = document.getElementById("sortPosts");
const postList = document.getElementById('post-list');

const posts = [
    {
        "title": "First Post",
        "body": "This is the first post"
    },
    {
        "title": "Second Post",
        "body": "This is the second post"
    }
];

function addPostToPage(posts) {
    postList.innerHTML = "";

    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;
        postDiv.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.textContent = post.body;
        postDiv.appendChild(postBody);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "my-2");
        deleteButton.addEventListener('click', () => {
            //Real-world scenario, send delete request to API here
            postList.removeChild(postDiv);
        });
        postDiv.appendChild(deleteButton);
        postList.appendChild(postDiv);
    });
}

addPostToPage(posts);