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

//Mark a task as completed
taskList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('task-item')) {
        target.classList.toggle('completed');
    }
});

//Filter tasks by status
taskStatusfilter.addEventListener('change', (event) => {
    const selectedStatus = event.target.value;
    const taskItems = taskList.querySelectorAll('.task-item');

    if (selectedStatus === "all") {
        taskItems.forEach(item => item.style.display = 'block');
    } else {
        taskItems.forEach(item => {
            item.style.display = item.classList.contains(selectedStatus) ? "block" : "none";
        });
    }
});

