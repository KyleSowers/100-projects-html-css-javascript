'use strict'

document.getElementById('calculate').addEventListener('click', () => {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('result');

    if (weight === "" || isNaN(weight)) {
        result.textContent = "Please enter a valid weight!";
    } else if (height === "" || isNaN(height)) {
        result.textContent = "Please enter a valid height!";
    } else {
        let bmi = (weight / (height * height / 10000)).toFixed(2);
            result.textContent = "Your BMI is " + bmi;
        }
});

