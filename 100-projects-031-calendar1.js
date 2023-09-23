'use strict'

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDay = today.getDate();

let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let startDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
//Date is the date(1.2.3....30,31), and 'day' is the day (Sun, Mon...)of the week.
let calendar =document.getElementById('calendar');
let html = '';

for (let i = 0; i < startDayOfWeek; i++) {
    html += '<td></td>'; //empty days at start
}

for (let day = 1; day <= daysInMonth; day++) {
    if (day === currentDay) {
        html += '<td class="today">${day}</td>';
    } else {
        html += '<td>${day}</td>';
    }

    if (new Date(currentYear, currentMonth, day).getDay() === 6) {
        html += '<tr></tr>'; //start a new row at the end of each week
    }
}

calendar.innerHTML += html;

if (new Date(currentYear, currentMonth, daysInMonth).getDay() !== 6) {
    calendar.innerHTML += '<tr>'; //end the last row if the month doesn't end on Saturday
}
