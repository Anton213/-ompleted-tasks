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
    if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
        && oneQuestions !== '' && twoQuestions !== '' && oneQuestions.length < 50) {
        console.log("done");
        appData.expenses[oneQuestions] = twoQuestions;
    } else {
        i--;
    }
}

// let i = 0;
// while ( i < 2 ) {
//     i++;w
//     let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         twoQuestions = prompt("Во сколько обойдется?", "");
//     if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
//         && oneQuestions !== '' && twoQuestions !== '' && oneQuestions.length < 50) {
//         console.log("done");
//         appData.expenses[oneQuestions] = twoQuestions;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// do {
//     i++;
//     let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         twoQuestions = prompt("Во сколько обойдется?", "");
//     if (typeof(oneQuestions) === 'string' && typeof(oneQuestions) != null && typeof(twoQuestions) != null
//         && oneQuestions !== '' && twoQuestions !== '' && oneQuestions.length < 50) {
//         console.log("done");
//         appData.expenses[oneQuestions] = twoQuestions;
//     } else {
//         i--;
//     }
// } while ( i < 2 );

appData.moneyPerDay = appData.moneyData / 30;

alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);

if ( appData.moneyPerDay < 500 ) {
    console.log("Минимальный уровень достатка");
} else if ( appData.moneyPerDay > 500 && appData.moneyPerDay < 2000 ) {
    console.log("Средний уровень достатка");
} else if ( appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}