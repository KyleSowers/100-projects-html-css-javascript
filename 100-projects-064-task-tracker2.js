'use strict'

//Array to hold task
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks = tasks.map(task => {
    return {
        ...task, dueDate: new Date(task.dueDate),
        completed: tasks.completed || false,
    };
});

document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

//     Create task object and add it to task arrays
    const task = {
        name: taskInput.value, dueDate: new Date(dueDateInput.value),
        completed: false,
    };
    tasks.push(task);

//     Persist tasks in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

//     Update the task display
    updateTaskDisplay();

//     Clear input fields
    taskInput.value = '';
    dueDateInput.value = '';
}

document.getElementById('sort-asc').addEventListener('click', function () {
    tasks.sort((a, b) => a.dueDate - b.dueDate);
    updateTaskDisplay();
});

document.getElementById('sort-desc').addEventListener('click', function () {
    tasks.sort((a, b) => b.dueDate - a.dueDate);
    updateTaskDisplay();
});

function updateTaskDisplay() {
    const taskList = document.getElementById('task-list').querySelector('tbody');

//     Clear the task list
    taskList.innerHTML = '';

//     Create a new list item for each task and append it to the task list
    for (let i = 0; i < tasks.length; i++) {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = tasks[i].name;
        taskCell.style.width = '220px';
        row.appendChild(taskCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = isNaN(tasks[i].dueDate.getTime()) ? 'No Due Date' : tasks[i].dueDate.toDateString();
        dateCell.style.width = '120px';
        row.appendChild(dateCell);

        const completeCell = document.createElement('td');
        completeCell.style.width = '70px';
        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = tasks[i].completed;
        completeCheckbox.addEventListener('change', function () {
            tasks[i].completed = completeCheckbox.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks)); //update tasks in local storage
            updateTaskDisplay();
        });
        completeCell.appendChild(completeCheckbox);
        row.appendChild(completeCell);

        const deleteCell = document.createElement('td');
        deleteCell.style.width = '80px';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasks.splice(i, 1); // remove the task from the tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // update tasks in localStorage
            updateTaskDisplay(); // re-display the tasks
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        taskList.appendChild(row);
    }
}
updateTaskDisplay(); // Call this function immediately after defining it to load tasks on page load