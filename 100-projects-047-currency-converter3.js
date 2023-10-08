'use strict'

// New function created to insert the thousand unit comma separator
function formatInput(input) {
    //Remove previous formatting
    let value = input.value.replace(/,/g, '');
    //Format the new value
    input.value = parseFloat(value).toLocaleString('en-US', { maximumFractionDigits: 2});
}


async function convertCurrency() {
    const textAmount = parseFloat(document.getElementById('amount').value);
    const amount =parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

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