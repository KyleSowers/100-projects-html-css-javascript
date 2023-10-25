'use strict'

//Array to hold task
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks = tasks.map(task => {
    return {
        ...task, dueDate: new Date(task.dueDate)
    };
});

document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

//     Create task object and add it to task arrays
    const task = {
        name: taskInput.value, dueDate: new Date(dueDateInput.value)
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

    function updateTaskDisplay() {
        const taskList = document.getElementById('task-list');

    //     Clear the task list
        taskList.innerHTML = '';

    //     Create a new list item for each task and append it to the task list
        for (let i = 0; i < tasks.length; i++) {
            const listItem = document.createElement('div');
        //     Check if the date is valid before displaying it
            if(isNaN(tasks[i].dueDate.getTime())) {
                listItem.textContent = `$${tasks[i].name} - No Due Date`;
            } else {
                listItem.textContent = `${tasks[i].name} - ${tasks[i].dueDate.toDateString()}`;
            }

        //     Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                tasks = tasks.filter(task => task !== tasks[i]); //remove the task from the tasks array
                localStorage.setItem('tasks', JSON.stringify(tasks)); // update tasks in local storage
                updateTaskDisplay(); // re-display the tasks
            });

            listItem.appendChild(deleteButton); //add the delete button to the task
            taskList.appendChild(listItem);
        }
    }
    updateTaskDisplay();
