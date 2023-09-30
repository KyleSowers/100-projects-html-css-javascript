'use strict'

function calculateBMI(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

//     convert height from cm to m
    height = height / 100;

    let bmi = weight / (height * height);

    let result = document.getElementById('result');

    if (bmi < 18.5) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This is considered underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This is considered normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This is considered over weight.";
    } else if (bmi === '' || isNaN()) {
        result.innerHTML = "Please enter a valid height and weight";
    } else {
        result.innerHTML ="Your BMI is " + bmi.toFixed(2) + ". This is considered obese.";
    }


}