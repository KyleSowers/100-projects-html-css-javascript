'use strict'

$(document).ready(function () {
    let balance = 0;
    let income = JSON.parse(localStorage.getItem("income")) || [];
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function loadItems() {
        $('#income-list').empty();
        $('#expenses-list').empty();
        income.forEach(item => addToIncomeList(item.desc, item.amount));
        expenses.forEach(item => addToExpensesList(item.desc, item.amount));
        updateIncomeTotal();
        updateExpensesTotal();
        updateBalance();
    }

    loadItems();

    $('#income-form').on('submit', function (e) {
        e.preventDefault();

        let desc = $('#income-desc').val();
        let amount = Number($('#income-amount').val());

        income.push({ desc: desc, amount: amount });
        localStorage.setItem("income", JSON.stringify(income));

        loadItems();

        $('#income-desc').val('');
        $('#income-amount').val('');
    });

    $('#expenses-form').on('submit', function (e) {
        e.preventDefault();

        let desc = $('#expenses-desc').val();
        let amount = Number($('#expenses-amount').val());

        expenses.push({ desc: desc, amount: amount });
        localStorage.setItem("expenses", JSON.stringify(expenses));

        loadItems();

        $('#expenses-desc').val('');
        $('#expenses-amount').val('');
    });

    function addToIncomeList(desc, amount) {
        const item = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center').html(`${desc}: $${amount}<span><button class="btn btn-success btn-sm mr-2 edit">Edit</button><button class="btn btn-danger btn-sm delete">Delete</button></span>`);
        item.find('.edit').on('click', function () {
            editItem(desc, amount, true);
        });
        item.find('.delete').on('click', function () {
            deleteItem(desc, amount, true);
        });
        $('#income-list').append(item);
    }

    function addToExpensesList(desc, amount) {
        const item = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center').html(`${desc}: $${amount}<span><button class="btn btn-success btn-sm mr-2 edit">Edit</button><button class="btn btn-danger btn-sm delete">Delete</button></span>`);
        item.find('.edit').on('click', function () {
            editItem(desc, amount, false);
        });
        item.find('.delete').on('click', function () {
            deleteItem(desc, amount, false);
        });
        $('#expenses-list').append(item);
    }

    function updateIncomeTotal() {
        let totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
        $('#income-total').text('Income Total: $' + totalIncome.toLocaleString());
    }

    function updateExpensesTotal() {
        let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
        $('#expenses-total').text('Expenses Total: $' + totalExpenses.toLocaleString());
    }

    function updateBalance() {
        let totalIncome = income.reduce((sum , item) => sum + item.amount, 0);
        let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
        let balance = totalIncome - totalExpenses;
        $('#balance').text('Balance: $' + balance.toLocaleString());
    }

    function editItem(desc, amount, isIncome) {
        const newDesc = prompt('Enter new description:', desc);
        const newAmount = Number(prompt('Enter new Amount:', amount));

        if (newDesc !== null && newAmount !== null) {
            if (isIncome) {
                const index = income.findIndex(item => item.desc === desc && item.amount === amount);
                income[index] = { desc: newDesc, amount: newAmount };
                localStorage.setItem("income", JSON.stringify(income));
            } else {
                const index = expenses.findIndex(item => item.desc === desc && item.amount === amount);
                expenses[index] = { desc: newDesc, amount: newAmount };
                localStorage.setItem("expenses", JSON.stringify(expenses));
            }

            loadItems();
        }
    }

    function deleteItem(desc, amount, isIncome) {
        if (isIncome) {
            const index = income.findIndex(item => item.desc === desc && item.amount === amount);
            income.splice(index, 1);
            localStorage.setItem("income", JSON.stringify(income));
        } else {
            const index = expenses.findIndex(item => item.desc === desc && item.amount === amount);
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
        }

        loadItems();
    }
});