'use strict'

let balance = 0;
let income = [];
let expenses = [];

document.getElementById('money-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let desc = document.getElementById('desc').value;
    let amount = Number(document.getElementById('amount').value);

    if (amount >= 0) {
        income.push({ desc: desc, amount: amount});
        addToIncomeList(desc, amount);
    } else {
        expenses.push({desc: desc, amount: amount});
        addToExpensesList(desc, amount);
    }

    balance += amount;
    document.getElementById('balance').innerText = 'Balance: $' + balance;

    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
});

function addToIncomeList(desc, amount) {
    let listItem = document.createElement('li');
    listItem.innerText = desc + ': $' + amount;
    document.getElementById('income-list').appendChild(listItem);
}

function addToExpensesList(desc, amount) {
    let listItem = document.createElement('li');
    listItem.innerText = desc + ': $' + Math.abs(amount);
    document.getElementById('expenses-list').appendChild(listItem);
}