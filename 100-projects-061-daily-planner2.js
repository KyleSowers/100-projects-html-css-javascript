'use strict'

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
let startOfWeek = today.getDate() - today.getDay();
let planner = document.getElementById('planner');

function drawPlanner() {
    for (let i = 0; i < 7; i++) {
        let dayDate = new Date(today.setDate(startOfWeek + i));
        let dayBlock = document.createElement('div');
        dayBlock.classList.add('day-block');

        let dayInfo = document.createElement('div');
        dayInfo.classList.add  ('day-info');

        let dayTitle = document.createElement('h3');
        dayTitle.innerText = days[i];

        let dayDateElement = document.createElement('span');
        dayDateElement.innerText = dayDate.toLocaleDateString();

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            textarea.value = '';
            localStorage.removeItem(`plans-${dayDate.toLocaleDateString()}`);
        };
        dayInfo.appendChild(dayTitle);
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

drawPlanner();