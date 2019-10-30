let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0 ; i < 2 ; i++ ) {
        let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
            twoQuestions = prompt("Во сколько обойдется?", "");
        if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
            && oneQuestions != '' && twoQuestions != '' && oneQuestions.length < 50) {
            console.log("done");
            appData.expenses[oneQuestions] = twoQuestions;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for ( let i = 0 ; i < 3 ; i++ ) {
        let expenses = prompt("Статья необязательных расходов?", '');
        if (i == 1) {
            appData.optionalExpenses[1] = expenses;
        } else if ( i == 2) {
            appData.optionalExpenses[2] = expenses;
        } else {
            appData.optionalExpenses[3] = expenses;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();
}
detectDayBudget();

alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);

function detectLevel() {
    if ( appData.moneyPerDay < 500 ) {
        console.log("Минимальный уровень достатка");
    } else if ( appData.moneyPerDay > 500 && appData.moneyPerDay < 2000 ) {
        console.log("Средний уровень достатка");
    } else if ( appData.moneyPerDay > 2000 ) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if ( appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            percent = +prompt("Под какой процент?", '');
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
    }
}
checkSavings();
console.log(appData);