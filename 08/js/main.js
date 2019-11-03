let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, dailyBudgetCalculation;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money === 0 || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.moneyData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {
    if (appData.moneyData !== undefined) {
        let sum = 0;

        for (let i = 0 ; i < expensesItem.length ; i++ ) {
            let oneQuestions = expensesItem[i].value,
                twoQuestions = expensesItem[++i].value;
            if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
                && oneQuestions !== '' && twoQuestions !== '' && oneQuestions.length < 50) {
                console.log("done");
                appData.expenses[oneQuestions] = twoQuestions;
                sum += +twoQuestions;
            } else {
                i--;
            }
        }
        dailyBudgetCalculation = sum;
        expensesValue.textContent = sum;
    }
});
optionalExpensesBtn.addEventListener('click', function () {
    if (appData.moneyData !== undefined) {
        for ( let i = 0 ; i < optionalExpensesItem.length ; i++ ) {
            let expenses = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = expenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});
countBudgetBtn.addEventListener('click', function () {
    if (appData.moneyData !== undefined) {
        if (appData.moneyData !== undefined) {
            appData.moneyPerDay = ((appData.moneyData - +dailyBudgetCalculation) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;

            if ( appData.moneyPerDay < 500 ) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if ( appData.moneyPerDay > 500 && appData.moneyPerDay < 2000 ) {
                levelValue.textContent = "Средний уровень достатка";
            } else if ( appData.moneyPerDay > 2000 ) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            dayBudgetValue.textContent = "Произошла ошибка";
        }
    }
});

chooseIncome.addEventListener('input', function () {
    if (appData.moneyData !== undefined) {
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    }
});

savings.addEventListener('click', function () {
    if (appData.moneyData !== undefined) {
        if (appData.savings !== true) {
            appData.savings = true;
        } else {
            appData.savings = false;
        }
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.moneyData !== undefined) {
        if (appData.savings === true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.moneyData !== undefined) {
        if (appData.savings === true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};