'use strict'

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDay = today.getDate();

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

function  generateCalendar(month, year) {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let startDayOfWeek = new Date(year, month, 1).getDay();

    let calendarBody = document.getElementById('calendar-body');
    let html = '<tr>';

    for (let i = 0; i < startDayOfWeek; i++) {
        html += '<td></td>'; // empty days at start
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (year === today.getFullYear() && month === today.getMonth() && day === currentDay) {
            html += `<td class="today">${day}</td>`;
        } else if (new Date(year, month, day).getDay() === 0) {
            html += `<td class="sunday>${day}</td>`;
        } else if (new Date(year, month, day).getDay() === 6) {
            html += `<td class="saturday">${day}</td>`;
        } else {
            html += `<td>${day}</td>`;
        }

        if (new Date(year, month, day).getDay() === 6) {
            html += '</tr><tr>'; //start a new row at the end of each week
        }
    }

    if (new Date(year, month, daysInMonth).getDay() !== 6) {
        html += '<td></td>'; //fill in empty at end
        daysInMonth++;
    }

    html += '</tr>';

    calendarBody.innerHTML = html

    document.getElementById('month-year').innerText = `${monthNames[month]} ${year}`;
}

generateCalendar(currentMonth, currentYear);