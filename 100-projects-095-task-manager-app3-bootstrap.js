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

function addTaskToPage(task, prepend = false) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.title;
    taskItem.classList.add('list-group-item', 'task-item');

    if (task.completed) {
        taskItem.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
    deleteButton.addEventListener('click', () => {
        //Real-world you would send DELETE request to API here
        taskList.remove();
    });

    taskItem.appendChild(deleteButton);
    // taskList.appendChild(taskItem);
    //Prepend or append the task item to the list based on the 'prepend parameter
    if (prepend) {
        taskList.prepend(taskItem);
    } else {
        taskList.appendChild(taskItem);
    }
}