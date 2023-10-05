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
        li.className = 'task' + (task.completed ? ' completed' : '');
        li.innerHTML = `
        <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
        ${task.text}
        <button onclick="deleteTask(${index})">Delete</button>
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