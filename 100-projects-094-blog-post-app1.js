'use strict'

const form = document.getElementById("post-form");
const titleInput = document.getElementById("postTitle");
const bodyInput = document.getElementById("postBody");
const postList = document.getElementById("post-list");


const posts = [
    {
        "id": 1,
        "title": "First Post",
        "body": "This is the first post"
    },
    {
        "id": 2,
        "title": "Second Post",
        "body": "This is the second post"
    }
];

//Function to display posts
function addPostToPage(posts) {
    postList.innerHTML = "";

    posts.forEach((post) => {
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
    })
}

addPostToPage(posts);

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