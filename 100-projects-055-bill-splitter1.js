'use strict'

document.getElementById('calculate-tip').addEventListener('click', function () {
    const bill = parseFloat(document.getElementById('bill-input').value);
    const tipPercentage = parseFloat(document.getElementById('tip-input').value);
    const people = parseInt(document.getElementById('people-input').value);

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(people) || bill < 0 || tipPercentage < 0 || people < 1) {
        document.getElementById('result').textContent = "Please enter valid inputs!";
        return;
    }
})