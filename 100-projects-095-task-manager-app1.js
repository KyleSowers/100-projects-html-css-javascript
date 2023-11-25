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

//Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        title: titleInput.value,
        completed: false,
    };
    //Real-world you would send POST request to API here
    addTaskToPage(task);

    //Clear input field
    titleInput.value = '';
});

function addTaskToPage(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.title;

    if (task.completed) {
        taskItem.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        //Real-world you would send DELETE request to API here
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

