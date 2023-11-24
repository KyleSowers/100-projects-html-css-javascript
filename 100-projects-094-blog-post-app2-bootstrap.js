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

