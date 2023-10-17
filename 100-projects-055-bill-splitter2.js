'use strict'

document.getElementById('calculate-tip').addEventListener('click', function () {
    const bill = parseFloat(document.getElementById('bill-input').value);
    const tipPercentage = parseFloat(document.getElementById('tip-input').value);
    const people = parseInt(document.getElementById('people-input').value);

    if (isNaN(bill) || isNAN(tipPercentage) || isNAN(people) || bill < 0 || tipPercentage < 0  || people < 1 ) {
        document.getElementById('result').textContent = "Please enter valid inputs!";
        return;
    }

    const tipAmount = bill * (tipPercentage / 100);
    const totalAmount = bill + tipAmount;
    const splitAmount = totalAmount / people;

    document.getElementById('result').textContent = `Total bill with tip: $${totalAmount.toFixed(2)}\nEach person should pay: $${splitAmount.toFixed(2)}`;
});