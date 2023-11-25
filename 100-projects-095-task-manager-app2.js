'use strict'

const form = document.getElementById('task-form');
const titleInput = document.getElementById('taskTitle');
const taskNumber = document.getElementById('taskNumber');
const setTaskNumberButton = document.getElementById('setTaskNumber');
const taskList = document.getElementById('task-list');
const API_URL = `https://jsonplaceholder.typicode.com/todos`;