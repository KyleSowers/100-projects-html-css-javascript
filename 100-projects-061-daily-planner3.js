'use strict'

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
let startOfWeek = today.getDate() - today.getDay();

// Weekly Planner
function drawWeeklyPlanner() {
    let planner = document.getElementById('weekly-planner-blocks');
    planner.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        let dayBlock = document.createElement('div');
        dayBlock.classList.add('day-block');
        let dayDate = new Date(today.getFullYear(), today.getMonth(), startOfWeek + i);

        let dayInfo = document.createElement('div');
        dayInfo.classList.add('day-info');

        let dayNameElement = document.createElement('h4');
        dayNameElement.innerText = days[dayDate.getDay()];

        let dayDateElement = document.createElement('span');
        dayDateElement.innerText = dayDate.toLocaleDateString();

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            localStorage.removeItem(`plans-${dayDate.toLocaleDateString()}`);
            drawWeeklyPlanner();
        };
        dayInfo.appendChild(dayNameElement);
        dayInfo.appendChild(dayDateElement);
        dayInfo.appendChild(deleteButton);

        let textarea = document.createElement('textarea');
        textarea.value = localStorage.getItem(`plans-${dayDate.toLocaleDateString()}`) || '';
        textarea.onchange = function (event) {
            localStorage.setItem(`plans-${dayDate.toLocaleDateString()}`, event.target.value);
        };

        dayBlock.appendChild(dayInfo);
        dayBlock.appendChild(textarea);
        planner.appendChild(dayBlock);
    }
}

// Daily Planner
let plannerDay = new Array(24).fill('');

function drawDailyPlanner() {
    let plannerElement = document.getElementById('daily-planner-blocks');
    plannerElement.innerHTML = '';
    for (let i = 0; i < 24; i++) {
        let hourBlock = document.createElement('div');
        hourBlock.classList.add('hour-block');
        let timeElement = document.createElement('span');
        timeElement.innerHTML = i < 10 ? `0${i}:00` : `${i}:00`;
        let inputElement = document.createElement('input');
        inputElement.value = plannerDay[i];
        inputElement.onchange = function (event) {
            plannerDay[i] = event.target.value;
        };
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            plannerDay[i] = '';
            drawDailyPlanner();
        };
        hourBlock.appendChild(timeElement);
        hourBlock.appendChild(inputElement);
        hourBlock.appendChild(deleteButton);
        plannerElement.appendChild(hourBlock);
    }
}

drawWeeklyPlanner();
drawDailyPlanner();
