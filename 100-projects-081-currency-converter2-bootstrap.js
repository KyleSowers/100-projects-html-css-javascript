'use strict'

const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultParagraph = document.getElementById('result');

let exchangeRates;

//Replace APIKEY
fetch('https://v6.exchangerate-api.com/v6/YOURAPIKEYHERE/latest/USD')
    .then(response => response.json())
    .then(data => {
        exchangeRates = data.conversion_rates;

        Object.keys(exchangeRates).forEach(currency => {
            fromCurrencySelect.innerHTML += ` <option value="${currency}">${currency}</option> `;
            toCurrencySelect.innerHTML += ` <option value="${currency}">${currency}</option>`;
        });
    });

function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = Number(amountInput.value);

    if (amount <= 0 ) {
        resultParagraph.innerText = "Please enter a positive amount.";
        resultParagraph.className = "text-danger";
        return;
    }

    const result = amount / exchangeRates[fromCurrency] * exchangeRates[toCurrency];
    resultParagraph.innerText = `${new Intl.NumberFormat().format(amount)} ${fromCurrency} = ${new Intl.NumberFormat().format(result)} ${toCurrency}`;
    resultParagraph.className = '';
}

function reverseCurrencies() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fromCurrencySelect.value = toCurrency;
    toCurrencySelect.value = fromCurrency;

    convertCurrency();
}