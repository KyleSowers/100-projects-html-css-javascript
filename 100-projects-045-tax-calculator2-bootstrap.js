'use strict'

function calculateTax() {
    const cost = parseFloat(document.getElementById('cost').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value) / 100;
    const tax = cost * taxRate;
    const total = cost + tax;
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Tax:</strong> $${tax.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;
}