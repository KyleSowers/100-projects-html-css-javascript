'use strict'

const form = document.getElementById('task-form');
const titleInput = document.getElementById('taskTitle');
const taskNumberInput = document.getElementById('taskNumber');
const setTaskNumberButton = document.getElementById('setTaskNumber');
const taskStatusfilter = document.getElementById('task-status-filter');
const taskList = document.getElementById('task-list');
const API_URL = `https://jsonplaceholder.typicode.com/todos`;

function fetchTasks() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((tasks) => {
            taskList.innerHTML = '';
            tasks.slice(0, taskNumberInput.value).forEach((task) => {
                addTaskToPage(task);
            });
        });
}

fetchTasks();

//Set Number of tasks
setTaskNumberButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetchTasks();
});

//Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        title: titleInput.value,
        completed: false
    };

    //Add task at the top of the list
    addTaskToPage(task, true);

    //clear the input field
    titleinput.value = '';
});

