'use strict'

const fromCurrencySelect = document.getElementById('from-currency');
const toCurrentSelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultParagraph = document.getElementById('result');

let exchangeRates;

//Fetch the latest exchange rates
fetch('https://v6.exchangerate-api.com/v6/aaf53da1eba53d98819909**/latest/USD')
    .then(response => response.json())
    .then(data => {
        exchangeRates = data.conversion_rates;

    //     Populate the select elements with the currency options
        Object.keys(exchangeRates).forEach(currency => {
            fromCurrencySelect.innerHTML += ` <option value="${currency}">${currency}</option> `;
            toCurrentSelect.innerHTML += ` <option value="${currency}">${currency}</option> `;
        });
    });

