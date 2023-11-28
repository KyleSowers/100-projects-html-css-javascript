'use strict'


const display = document.querySelector("#display");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', () => {
        if (button.hasAttribute("data-number") || button.hasAttribute("data-operator") || button.hasAttribute("data-decimal")) {
            display.value += button.textContent;
        } else if (button.hasAttribute("data-equal")) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (button.hasAttribute("data-clear")) {
            display.value = "";
        } else if (button.hasAttribute("data-sign")) {
            if (display.value) {
                display.value = parseFloat(display.value) * -1;
            }
        }else if (button.hasAttribute("data-percent")) {
            if (display.value) {
                display.value = parseFloat(display.value) / 100;
            }
        } else if (button.hasAttribute("data-sqrt")) {
            if (display.value) {
                display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
            }
        } else if (button.hasAttribute("data-square")) {
            if (display.value) {
                display.value = Math.pow(parseFloat(display.value), 2);
            }
        }
    });
});