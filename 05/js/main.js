let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money === 0 || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0 ; i < 2 ; i++ ) {
            let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
                twoQuestions = prompt("Во сколько обойдется?", "");
            if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
                && oneQuestions !== '' && twoQuestions !== '' && oneQuestions.length < 50) {
                console.log("done");
                appData.expenses[oneQuestions] = twoQuestions;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if ( appData.moneyPerDay < 500 ) {
            console.log("Минимальный уровень достатка");
        } else if ( appData.moneyPerDay > 500 && appData.moneyPerDay < 2000 ) {
            console.log("Средний уровень достатка");
        } else if ( appData.moneyPerDay > 2000 ) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if ( appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
        }
    },
    chooseOptExpenses: function () {
        for ( let i = 0 ; i < 3 ; i++ ) {
            let expenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = expenses;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (+items === 0 || items == null) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?", ''));
        appData.income.sort();
        appData.income.forEach(function (item, i) {
            alert("Способ доп. заработка: " + (i + 1) + ') ' + item)
        })
    }
};

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}