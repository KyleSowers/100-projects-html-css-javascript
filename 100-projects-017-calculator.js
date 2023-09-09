'use strict'

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let operators = Array.from(document.getElementsByClassName('operator'));
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

buttons.map(button =>{
    button.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

operators.map(operator => {
    operator.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

equals.addEventListener('click', () => {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});

clear.addEventListener('click', () => {
    display.value = "";
});