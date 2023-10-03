'use strict'

function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    let laonTerm = parseFloat(document.getElementById('loanTerm').value * 12);
    let gracePeriod = parseFloat(document.getElementById('gracePeriod').value);
    let repaymentPeriod = parseFloat(document.getElementById('repaymentPeriod').value);

    let x = Math.pow(1 + interestRate, laonTerm);
    let monthlyPayment = (loanAmount * x * interestRate) / (x-1);
    let totalPayment =  monthlyPayment * laonTerm;
    let totalInterest = totalPayment - loanAmount;

    let output = `
        <table border="1">
            <tr>
                <th>Monthly Payment</th>
                <th>Total Payment</th>
                <th>Total Interest</th>
            </tr>
            <tr>
                <td>$${monthlyPayment.toFixed(2)}</td>
                <td>$${totalPayment.toFixed(2)}</td>
                <td>$${totalInterest.toFixed(2)}</td>
            </tr>
        </table>
    `;

    document.getElementById('output').innerHTML = output;
}