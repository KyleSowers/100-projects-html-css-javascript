'use strict'

$(document).ready(function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        return {
            ...task,
            dueDate: new Date(task.dueDate),
            completed: task.completed || false,
        };
    });

    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        const taskInput = $('#task-input');
        const dueDateInput = $('#due-date-input');

        const task = {
            name: taskInput.val(),
            dueDate: new Date(dueDateInput.val()),
            complete: false,
        };
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        updateTaskDisplay();
        taskInput.val('');
        dueDateInput.val('');
    });

    $('#sort-asc').on('click', function () {
        tasks.sort((a, b) => a.dueDate - b.dueDate);
        updateTaskDisplay();
    });

    $('#sort-desc').on('click', function () {
        tasks.sort((a, b) => b.dueDate - a.dueDate);
        updateTaskDisplay();
    });

    function updateTaskDisplay() {
        const taskList = $('#task-list tbody');
        taskList.html('');

        tasks.forEach((task, i) => {
            const row = $('<tr>');
            const taskCell = $('<td>').text(task.name).css('width', '220px');
            const dateCell = $('<td>').text(isNaN(task.dueDate.getTime()) ? 'No Due Date' : task.dueDate.toDateString()).css('width', '120px');
            const completeCell = $('<td>').css('width', '70px');
            const completeCheckbox = $('<input>').attr('type', 'checkbox').prop('checked', task.completed).on('change', function () {
                tasks[i].completed = this.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                updateTaskDisplay();
            });
            completeCell.append(completeCheckbox);
            const deleteCell = $('<td>').css('width', '80px');
            const deleteButton = $('<button>').addClass('btn btn-danger').text('Delete').on('click', function() {
                tasks.splice(i, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                updateTaskDisplay();
            });
            deleteCell.append(deleteButton);
            row.append(taskCell, dateCell, completeCell, deleteCell);
            taskList.append(row);
        });
    }

    updateTaskDisplay();
});