let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0 ; i < 2 ; i++ ) {
    let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
        twoQuestions = prompt("Во сколько обойдется?", "");

    appData.expenses[oneQuestions] = twoQuestions;
}

alert('Ваш бюджет на 1 день: ' + appData.moneyData / 30);
