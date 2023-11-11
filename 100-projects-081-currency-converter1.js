'use strict'

const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultParagraph = document.getElementById('result');

let exchangeRates;

//Fetch the latest exchange rates
fetch('https://v6.exchangerate-api.com/v6/YOURAPIKEYHERE/latest/USD')
    .then(response => response.json())
    .then(data => {
        exchangeRates = data.conversion_rates;

    //     Populate the select elements with the currency options
        Object.keys(exchangeRates).forEach(currency => {
            fromCurrencySelect.innerHTML += ` <option value="${currency}">${currency}</option> `;
            toCurrencySelect.innerHTML += ` <option value="${currency}">${currency}</option> `;
        });
    });

function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    const result = amount / exchangeRates[fromCurrency] * exchangeRates[toCurrency];
    resultParagraph.innerText = `${new Intl.NumberFormat().format(amount)} ${fromCurrency} = ${new Intl.NumberFormat().format(result)} ${toCurrency}`;
}