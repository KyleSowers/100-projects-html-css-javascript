'use strict'

const form = document.getElementById('event-form');
const nameInput = document.getElementById('eventName');
const timeInput = document.getElementById('eventTime');
const countdownTitle = document.getElementById('countdown-title');
const countdownEl = document.getElementById('countdown');

let countdownInterval;

//Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const eventName = nameInput.value;
    const eventTime = new Date(timeInput.value);

    countdownTitle.textContent = `Countdown to ${eventName}:`;

    //Clear existing countdown
    clearInterval(countdownInterval);

    //Start new countdown
    countdownInterval = setInterval(() => {
        const now = new Date();
        const distance = eventTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        //When countdown is over
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.textContent = 'Event has started!';
        }
    }, 1000);
});