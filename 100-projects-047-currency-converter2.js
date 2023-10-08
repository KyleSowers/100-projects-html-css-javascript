'use strict'

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value.toUpperCase();
    const toCurrency = document.getElementById('to-currency').value.toUpperCase();

//     http://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD create own number.
    const responce = await fetch(`https://v6.exchangerate-api.com/v6/YOURKEYHERE/latest/${fromCurrency}`);
    const data = await responce.json();
    if(data && data.conversion_rates) {
        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * rate;
        const formattedAmount = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2}).format(convertedAmount);
        document.getElementById('output').innerHTML = `${amount} ${fromCurrency} = ${formattedAmount} ${toCurrency}`;
    } else {
        document.getElementById('output').innerHTML = 'An error occurred while fetching the exchange rates';
    }
}