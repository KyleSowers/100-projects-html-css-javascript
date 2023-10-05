'use strict'

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const newTask = taskInput.value;

    if (newTask) {
        tasks.push({
            text: newTask,
            completed: false,
        });
        taskInput.value = '';
        renderTasks();
    }
}
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center' + (task.completed ? ' list-group-item-success' : '');
        li.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
                <label class="form-check-label ${task.completed ? 'text-decoration-line-through' : ''}">
                ${task.text}
                </label>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}