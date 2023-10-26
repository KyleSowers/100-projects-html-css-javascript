'use strict'

let balance = 0;
let income = JSON.parse(localStorage.getItem('income')) || [];
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

window.onload = function () {
    income.forEach(item => addToIncomeList(item.desc, item.amount));
    expenses.forEach(item => addToExpensesList(item.desc. item.amount));
    updateIncomeTotal();
    updateExpensesTotal();
    updateBalance();
}

document.getElementById('income-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let desc = document.getElementById('income-desc').value;
    let amount = Number(document.getElementById('income-amount').value);

    income.push({desc: desc, amount: amount});
    addToIncomeList(desc, amount);

    localStorage.setItem('income', JSON.stringify(income));

    updateIncomeTotal();
    updateBalance();

    document.getElementById('income-desc').value = '';
    document.getElementById('income-amount').value = '';
});

document.getElementById('expenses-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let desc = document.getElementById('expenses-desc').value;
    let amount = Number(document.getElementById('expenses-amount').value);

    expenses.push({ desc: desc, amount: amount});
    addToExpensesList(desc, amount);

    localStorage.setItem('expenses', JSON.stringify(expenses));

    updateExpensesTotal();
    updateBalance();

    document.getElementById('expenses-desc').value = '';
    document.getElementById('expenses-amount').value = '';
});

function addToIncomeList (desc, amount) {
    let listItem = document.createElement('li');
}