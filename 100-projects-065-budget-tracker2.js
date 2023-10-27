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
    listItem.innerHTML = `
    <span>${desc}: $${amount.toLocaleString()}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    `;
    listItem.querySelector('.edit').addEventListener('click', function () {
        let newDesc = prompt('Enter new description:', desc);
        let newAmount = prompt('Enter new amount:', amount);
        if (newDesc && newAmount) {
            let index = income.findIndex(item => item.desc === desc && item.amount === amount);
            income[index] = { desc: newDesc, amount: parseFloat(newAmount)};
            localStorage.setItem('income', JSON.stringify(income));
            listItem.querySelector('span').innerText = `${newDesc}: $${parseFloat(newAmount.toLocaleString())}`;
            updateIncomeTotal();
            updateExpensesTotal();
            updateBalance();
        }
    });
    listItem.querySelector('.delete').addEventListener('click', function () {
        let index = income.findIndex(item => item.desc === desc && item.amount === amount);
        income.splice(index, 1);
        localStorage.setItem('income', JSON.stringify(income));
        listItem.remove();
        updateIncomeTotal();
        updateExpensesTotal();
        updateBalance();
    });
    document.getElementById('income-list').appendChild(listItem);
}

function  addToExpensesList(desc, amount) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <span>${desc}: $${amount.toLocaleString()}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    `;

    listItem.querySelector('.edit').addEventListener('click', function () {
        let newDesc = prompt('Enter new description');
        let newAmount = prompt('Enter new amount', amount);
        if (newDesc && newAmount) {
            let index = expenses.findIndex(item => item.desc === desc && item.amount === amount);
            expenses[index] = { desc: newDesc, amount: parseFloat(newAmount)};
            localStorage.setItem('expenses', JSON.stringify(expenses));
            listItem.querySelector('span').innerText = `
            ${newDesc}: $${parseFloat(newAmount).toLocaleString()}`;
            updateIncomeTotal();
            updateExpensesTotal();
            updateBalance();
        }
    });
    listItem.querySelector('.delete').addEventListener('click', function () {
        let index = expenses.findIndex(item => item.desc === desc && item.amount === amount);
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        listItem.remove();
        updateIncomeTotal();
        updateExpensesTotal();
        updateBalance();
    });
    document.getElementById('expenses-list').appendChild(listItem);
}

function updateIncomeTotal() {
    let totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById('income-total').innerText = 'Income Total: $' + totalIncome.toLocaleString();
}

function  updateExpensesTotal() {
    let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById('expenses-total').innerText = 'Expenses Total: $' + Math.abs(totalExpenses).toLocaleString();
}

function  updateBalance() {
    let totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    let balance = totalIncome - totalExpenses;
    document.getElementById('balance').innerText = 'Balance: $' + balance.toLocaleString();
}