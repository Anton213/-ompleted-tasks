let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),
    firstQuestion,
    secondQuestion;
for (let i = 0; i < 2; i++) {
    firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", '');
    secondQuestion = prompt("Во сколько обойдется?", '')
};

let appData = {
    moneyData: parseFloat(money),
    timeData: time,
    expenses: {
        firstQuestion: secondQuestion
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Ваш бюджет на 1 день: ' + appData.moneyData / 30);
