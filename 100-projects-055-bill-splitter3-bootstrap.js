'use strict'

$('#calculate-tip').click(function () {
    const bill = parseFloat($('#bill-input').val());
    const tipPercentage = parseFloat($('#tip-input').val());
    const people = parseInt($('people-input').val());

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(people) || bill < 0 || tipPercentage < 0 || people < 1) {
        $('#result').text('Please enter valid inputs!');
        return;
    }

    const tipAmount = bill * (tipPercentage / 100);
    const totalAmount = bill + tipAmount;
    const splitAmount = totalAmount / people;

    $('#result').text(`Total bill with tip: $${totalAmount.toFixed(2)}\nEach person should pay: $${splitAmount.toFixed(2)}`);
});