'use strict'

function calculateLoan() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value / 100 / 12;
    let loanTerm = document.getElementById('loanTerm').value * 12;

    let x =Math.pow(1 + interestRate, loanTerm);
    let monthlyPayment = (loanAmount * x * interestRate) / (x -1);
    document.getElementById('output').innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2);
}