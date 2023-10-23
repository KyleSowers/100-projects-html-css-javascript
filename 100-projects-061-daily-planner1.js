'use strict'

let planner = new Array(24).fill('');

function drawPlanner() {
    let plannerElement = document.getElementById('planner');
    plannerElement.innerHTML = '';
    for (let i = 0; i < 24; i++) {
        let hourBlock = document.createElement('div');
        hourBlock.classList.add('hour-block');
        let timeElement = document.createElement('span');
        timeElement.innerText = i < 10 ? `0${i}:00` : `${i}:00`;
        let inputElement = document.createElement('inpput');
        inputElement.value = planner[i];
        inputElement.onchange = function (event) {
            planner[i] = event.target.value;
        };
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            planner[i] = '';
            drawPlanner();
        };
        hourBlock.appendChild(timeElement);
        hourBlock.appendChild(inputElement);
        hourBlock.appendChild(deleteButton);
        plannerElement.appendChild(hourBlock);
    }
}

drawPlanner();