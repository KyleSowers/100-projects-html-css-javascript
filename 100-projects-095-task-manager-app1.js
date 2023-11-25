'use strict'

const form = document.getElementById('task-form');
const titleInput = document.getElementById('taskTitle');
const taskList = document.getElementById('task-list');
const API_URL = `https://jsonplaceholder.typicode.com/todos`;

//fetch initial tasks
fetch(API_URL)
    .then((response) => response.json())
    .then((tasks) => {
        tasks.forEach((task) => {
            addTaskToPage(task);
        });
    });
//Real-world you would send POST request to API here
addTaskToPage(task);

//Clear input field
titleInput.value = '';