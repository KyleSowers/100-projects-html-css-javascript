'use strict'

const form = document.getElementById('task-form');
const titleInput = document.getElementById('taskTitle');
const taskNumberInput = document.getElementById('taskNumber');
const setTaskNumberButton = document.getElementById('setTaskNumber');
const taskList = document.getElementById('task-list');
const API_URL = `https://jsonplaceholder.typicode.com/todos`;

//Fetch initial Tasks
function fetchTasks() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((tasks) => {
            taskList.innerHTML = '';
            tasks.slice(0, taskNumberInput.value).forEach((task) => {
                addTaskToPage(tasks);
            });
        });
}

fetchTasks();

//Set a number of tasks
setTaskNumberButton.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        title: titleInput.value;
        completed: false;
    };

    //Add task to the top of the list
    addTaskToPage(task, true);

    //clear the input field
    titleInput.value = '';
});

