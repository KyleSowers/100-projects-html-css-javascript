'use strict'

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('form-currency').value.toUpperCase();
    const toCurrency = document.getElementById('to-currency').value.toUpperCase();

//     http://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD create own number.
    const responce = await fetch(`https://v6.exchangerate-api.com/v6/YOURKEY/latest/${fromCurrency}`);
    const data = await responce.json();
    if(data && data.conversion_rates) {
        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * rate;
        document.getElementById('output').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('output').innerHTML = 'An error occurred while fetching the exchange rates';
    }
}

//  List of commonly used currencies
// GBP (Great Britain Pound) - United Kingdom
// JPY (Japanese Yen) - Japanese
// AUD (Australian Dollar) - Australian
// CAD (Canadian Dollar) - Canada
// CHF (Swiss Franc) - Switzerland
// CNY (Chinese Yuan) - China
// SEK (Swedish Krona) - Sweden
// NZD (New Zealand Dollar) - New Zealand
// MXN (Mexican Peso) - Mexico
// SGD (Singapore Dollar) - Singapore
// HKD (Hong Kong Dollar) - Hong Kong
// NOK (Norwegian Krone) - Norway
// KRW (South Korean Won) - South Korea
// TRY (Turkish Lira) - Turkey
// INR (Indian Rupee) - India
// RUB (Russian Ruble) - Russian
// BRL (Brazilian Real) - Brazil
// ZAR (South African Rand) - South Africa
// SAR (Saudi Riyal) Saudi Arabia
// AED (United Arab Emirates Dirham) - United Arab Emirates
// Users can enter these currency codes in the "From Currency" and "To Currency" fields of the currency converter

